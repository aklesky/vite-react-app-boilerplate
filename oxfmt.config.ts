import preset from '@aklesky/oxc-presets/oxfmt.js'
import { defineConfig } from 'oxfmt'

export default defineConfig({
    ...preset,
    ignorePatterns: ['pnpm-lock.yaml', 'worker-configuration.d.ts']
})
