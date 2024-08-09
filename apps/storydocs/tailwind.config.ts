import type { Config } from 'tailwindcss'
import sharedConfig from '@stack/config-tailwind'

const config: Pick<Config, 'content' | 'presets'> = {
  presets: [sharedConfig],
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/handcrafted-components/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/aria-components/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/radix-components/src/**/*.{js,ts,jsx,tsx}'
  ]
}

export default config
