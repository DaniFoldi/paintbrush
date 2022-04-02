import { get, setupTest } from '@nuxt/test-utils'
import { describe, expect, it } from 'ts-jest'


describe('paintbrush docs app', () => {
  setupTest({ server: true })
  it('renders the welcome page', async () => {
    const { body } = await get('/')
    expect(body).toContain('Paintbrush Docs')
  })
})
