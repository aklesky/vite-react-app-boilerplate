import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { App } from './app.js'

describe('App', () => {
    it.each([['Vite + React + Cloudflare'], ['count is'], ['Name to send to the API'], ['Name from API is:']])(
        'renders %s',
        text => {
            expect(renderToString(<App />)).toContain(text)
        }
    )
})
