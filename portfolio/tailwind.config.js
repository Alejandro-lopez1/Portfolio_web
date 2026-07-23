/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bondi: {
          50: '#0D3A4A',
          100: '#104860',
          200: '#145A78',
          300: '#7ED4F7',
          400: '#9BD8E9',
          500: '#0A7EA4',
          600: '#0E9BC6',
          700: '#12B4E0',
          800: '#5ECFF0',
          900: '#A3E4F8',
        },
        retro: {
          bg: '#0D1117',
          surface: '#161B22',
          text: '#E6EDF3',
          muted: '#8B949E',
          border: '#30363D',
          'border-light': '#21262D',
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'cursive'],
        'pixel-start': ['"Press Start 2P"', 'cursive'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'apple': '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
        'apple-lg': '0 4px 16px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)',
        'apple-inset': 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
        'glass': '0 8px 32px rgba(10, 126, 164, 0.15)',
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite',
        'cursor-pixel': 'cursor-pixel 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'boot': 'boot 0.5s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'cursor-pixel': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        boot: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      borderRadius: {
        'mac': '8px',
      },
    },
  },
  plugins: [],
}
