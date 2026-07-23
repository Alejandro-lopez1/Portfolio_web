/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bondi: {
          50: '#E8F5F9',
          100: '#D1EBF3',
          200: '#A3D7E7',
          300: '#7ED4F7',
          400: '#9BD8E9',
          500: '#0A7EA4',
          600: '#086A8A',
          700: '#065570',
          800: '#044156',
          900: '#022C3C',
        },
        retro: {
          bg: '#F5F8FA',
          surface: '#FFFFFF',
          text: '#1E1E1E',
          muted: '#6B7280',
          border: '#D1D5DB',
          'border-light': '#E5E7EB',
        },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'cursive'],
        'pixel-start': ['"Press Start 2P"', 'cursive'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'apple': '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'apple-inset': 'inset 0 1px 2px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px rgba(10, 126, 164, 0.08)',
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
