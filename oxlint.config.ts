import preset from '@aklesky/oxc-presets/oxlint-react.js'
import { defineConfig } from 'oxlint'

export default defineConfig({
    extends: [preset],
    ignorePatterns: ['worker-configuration.d.ts']
})
