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
        brand: {
          50: '#061A10',
          100: '#0A2A1A',
          200: '#0D4E2D',
          300: '#A7F3D0',
          400: '#3DDC97',
          500: '#15AD6E',
          600: '#0F8F5A',
          700: '#058042',
          800: '#0B6B42',
          900: '#D1FAE5',
        },
        retro: {
          bg: '#0A0E0D',
          surface: '#111715',
          text: '#FAF9F6',
          muted: '#9BA8A2',
          border: '#223029',
          'border-light': '#18211D',
        },
      },
      fontFamily: {
        pixel: ['Poppins', 'system-ui', 'sans-serif'],
        'pixel-start': ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 2px 8px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.25)',
        'apple-lg': '0 4px 16px rgba(0, 0, 0, 0.45), 0 2px 4px rgba(0, 0, 0, 0.25)',
        'apple-inset': 'inset 0 1px 2px rgba(0, 0, 0, 0.25)',
        'glass': '0 8px 32px rgba(21, 173, 110, 0.15)',
        'glow': '0 0 0 1px rgba(21, 173, 110, 0.25), 0 8px 32px rgba(21, 173, 110, 0.18)',
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
