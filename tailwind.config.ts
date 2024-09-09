const plugin = require('tailwindcss/plugin')

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class'],
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
          900: '#064225'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        'fade-in': 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          'animation-delay': (value: any) => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    })
  ]
}
export default config
