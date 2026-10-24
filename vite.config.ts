import config from '@aklesky/react-presets/worker.js'
import { withTailwind } from '@aklesky/tailwindcss-presets/vite.js'
import { mergeConfig } from 'vite'

export default mergeConfig(config, withTailwind())
