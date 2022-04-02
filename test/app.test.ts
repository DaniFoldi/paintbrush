import { get, setupTest } from '@nuxt/test-utils'


describe('paintbrush docs app', () => {
  setupTest({ server: true })
  it('renders the welcome page', async () => {
    const { body } = await get('/')
    expect(body).toContain('Paintbrush Docs')
  })
})
