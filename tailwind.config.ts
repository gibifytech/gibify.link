import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#e7f5ee',
          100: '#b5e1cb',
          200: '#91d2b2',
          300: '#5ebd8f',
          400: '#3fb179',
          500: '#0f9d58',
          600: '#0e8f50',
          700: '#0b6f3e',
          800: '#085630',
          900: '#064225',
        }
      },
    },
  },
  plugins: [],
}
export default config
