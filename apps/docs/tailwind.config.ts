// /** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import sharedConfig from '@stack/config-tailwind'

const config: Pick<Config, 'content' | 'presets'> ={
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    '../../packages/components/src/**/*.{js,ts,jsx,tsx}'
  ],
  presets: [sharedConfig],
}

export default config

