import type { Config } from 'tailwindcss'
import relumeTailwindConfig from './relume-tailwind-config.js'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@relume_io/relume-ui/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    relumeTailwindConfig,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
