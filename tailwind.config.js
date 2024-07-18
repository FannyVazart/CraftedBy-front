const { mauve, green, grass, blackA, red } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        mauve,
        green,
        grass,
        blackA,
        red,
        'platinum': 'var(--color-platinum)',
        'vermillon': 'var(--color-vermillon)',
        'seasalt': 'var(--color-seasalt)',
        'cadet-gray': 'var(--color-cadet-gray)',
        'space-cadet': 'var(--color-space-cadet)',
        'dark-purple': 'var(--color-dark-purple)',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      body : {
        '2xl': '1440px',
        'bg': 'var(vermillon)',
      },
      button: {
        'primary': {
          'default': 'var(--color-white)',
          'hover': 'var(--color-white)',
          'active': 'var(--color-white)',
          'disabled': 'var(--color-white)',
        },
        'secondary': {
          'default': 'var(--color-black)',
          'hover': 'var(--color-black)',
          'active': 'var(--color-black)',
          'disabled': 'var(--color-black)',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

