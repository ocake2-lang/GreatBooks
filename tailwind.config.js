/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F5F6F8',
          100: '#E9EBF0',
          200: '#D2D7E2',
          300: '#9DA8BC',
          400: '#64748B',
          600: '#334155',
          700: '#1E293B',
          800: '#141A24',
          900: '#0C1017',
          950: '#07090E',
        },
        parchment: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F2EADB',
          300: '#E7DBC6',
          400: '#D5C4A6',
          500: '#BFAF8E',
          600: '#9C8C6B',
          700: '#75684D',
          800: '#4D4433',
          900: '#2A251B',
        },
        gold: {
          100: '#FDF8E8',
          200: '#F8EEC4',
          300: '#EED98E',
          400: '#DFC25E',
          500: '#C5A059',
          600: '#B0883B',
          700: '#8E6B2A',
          800: '#6D5120',
          900: '#4B3615',
        },
        crimson: {
          50: '#FCF3F4',
          100: '#F7E2E5',
          200: '#ECC3C9',
          300: '#DB9CA5',
          400: '#C16272',
          500: '#9E3247',
          600: '#842035',
          700: '#6B1627',
          800: '#52121E',
          900: '#3D0E17',
        },
        sage: {
          100: '#EBF0E9',
          300: '#C5D4C0',
          600: '#5E7A55',
          800: '#34472F',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        newsreader: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'book': '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
        'book-lg': '0 20px 40px -10px rgba(0, 0, 0, 0.35), 0 12px 18px -8px rgba(0, 0, 0, 0.25)',
        'vellum': 'inset 0 0 40px rgba(197, 160, 89, 0.08), 0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

