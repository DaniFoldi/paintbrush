/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Handler } from 'h3'
import { IncomingMessage } from 'unenv/runtime/node/http/_request'
import { ServerResponse } from 'unenv/runtime/node/http/_response'
import { requestHasBody, useRequestBody } from 'nitropack/dist/runtime/utils'
import { AccessoryEnvironment } from './environment'
import type { CallContext } from 'unenv/runtime/fetch'
import { nitroApp } from '#internal/nitro'


function normalizeOutgoingHeaders(headers: Record<string, string | string[] | undefined>) {
  return Object.entries(headers).map(([ k, v ]) => [ k, Array.isArray(v) ? v.join(',') : v ])
}

function localCall(context: CallContext, handle: Handler) {
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
  req.context = context.context

  // @ts-expect-error
  req.env = context.env

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

const handler: {
  // eslint-disable-next-line no-undef
  fetch?: ExportedHandlerFetchHandler<AccessoryEnvironment>
  // eslint-disable-next-line no-undef
  scheduled?: ExportedHandlerScheduledHandler<AccessoryEnvironment>
} = {
  async fetch(request, env, context) {

    const url = new URL(request.url)
    let body
    if (requestHasBody(request)) {
      body = await useRequestBody(request)
    }

    const r = await localCall({
      env, context,
      url: url.pathname + url.search,
      host: url.hostname,
      protocol: url.protocol,
      headers: Object.fromEntries(request.headers.entries()),
      method: request.method,
      redirect: request.redirect,
      body
    }, nitroApp.h3App.nodeHandler as any)

    return new Response(r.body, {

      // @ts-expect-error
      headers: normalizeOutgoingHeaders(r.headers),
      status: r.status,
      statusText: r.statusText
    })
  }
}

export default handler
