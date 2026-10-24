import { describe, expect, it } from 'vitest'
import worker from './index.js'

const call = (path: string) => worker.fetch(new Request(`http://localhost${path}`))

describe('worker', () => {
    it.each([
        ['/api/', 'Cloudflare'],
        ['/api/?name=Ada', 'Ada'],
        ['/api/?name=', 'Cloudflare']
    ])('GET %s answers with the name %s', async (path, name) => {
        const response = await call(path)
        expect(await response.json()).toEqual({ name })
    })

    it('answers other paths with 404', async () => {
        const response = await call('/missing')
        expect(response.status).toBe(404)
    })
})
