/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Handler } from 'h3'
import { IncomingMessage } from 'unenv/runtime/node/http/_request'
import { ServerResponse } from 'unenv/runtime/node/http/_response'
import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'
import { withoutBase } from 'ufo'
import { requestHasBody, useRequestBody } from 'nitropack/dist/runtime/utils'
import { createFetch } from 'ohmyfetch'
import { createFetch as createLocalFetch } from 'unenv/runtime/fetch/index'
import type { CallContext } from 'unenv/runtime/fetch'
// eslint-disable-next-line import/no-unresolved
import { nitroApp } from '#internal/nitro/app'
// eslint-disable-next-line import/no-unresolved
import { useRuntimeConfig } from '#internal/nitro'


interface AccessoryEnvironment {
  TEST: string
}


function normalizeOutgoingHeaders(headers: Record<string, string | string[] | undefined>) {
  return Object.entries(headers).map(([ k, v ]) => [ k, Array.isArray(v) ? v.join(',') : v ])
}

function createCall(handle: Handler, ctx: any, env: any) {
  return function(context: CallContext) {
    const req = new IncomingMessage()
    const res = new ServerResponse(req as any)

    req.url = context.url || '/'
    req.method = context.method || 'GET'
    req.headers = context.headers || {}
    req.headers.host = req.headers.host || context.host || undefined

    // @ts-expect-error
    req.connection.encrypted = req.connection.encrypted || context.protocol === 'https'

    // @ts-expect-error
    req.body = context.body || null

    // @ts-expect-error
    req.context = ctx

    // @ts-expect-error
    req.env = env

    // @ts-expect-error
    return handle(req, res).then(() => {
      const r = {
        body: (res._data as any)?.toString() ?? '',
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      }

      req.destroy()
      res.destroy()

      return r
    })
  }
}

function assetsCacheControl(_request) {
  // TODO: Detect public asset bases
  // if (request.url.startsWith(buildAssetsURL())) {
  //   return {
  //     browserTTL: 31536000,
  //     edgeTTL: 31536000
  //   }
  // }
  return {}
}

const baseURLModifier = (request: Request) => {
  const url = withoutBase(request.url, useRuntimeConfig().app.baseURL)
  return mapRequestToAsset(new Request(url, request))
}

const handler: {
  // eslint-disable-next-line no-undef
  fetch?: ExportedHandlerFetchHandler<AccessoryEnvironment>
  // eslint-disable-next-line no-undef
  scheduled?: ExportedHandlerScheduledHandler<AccessoryEnvironment>
} = {
  async fetch(request, env, context) {

    try {
      return await getAssetFromKV(
        { request, waitUntil: context.waitUntil },
        { cacheControl: assetsCacheControl, mapRequestToAsset: baseURLModifier }
      )
    } catch {
      // Ignore
    }

    const url = new URL(request.url)
    let body
    if (requestHasBody(request)) {
      body = await useRequestBody(request)
    }

    const localCall = createCall(nitroApp.h3App.nodeHandler as any, context, env)
    nitroApp.localCall = localCall
    const localFetch = createLocalFetch(localCall, globalThis.fetch)
    nitroApp.localFetch = localFetch

    const $fetch = createFetch({ fetch: localFetch, Headers, defaults: { baseURL: useRuntimeConfig().app.baseURL } })
    // @ts-expect-error
    globalThis.$fetch = $fetch

    const r = await nitroApp.localCall({
      url: url.pathname + url.search,
      host: url.hostname,
      protocol: url.protocol,
      headers: Object.fromEntries(request.headers.entries()),
      method: request.method,
      redirect: request.redirect,
      body
    })

    return new Response(r.body, {

      // @ts-expect-error
      headers: normalizeOutgoingHeaders(r.headers),
      status: r.status,
      statusText: r.statusText
    })
  }
}

export default handler
