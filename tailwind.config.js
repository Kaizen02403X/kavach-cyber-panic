/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kavach: {
          navy: {
            DEFAULT: '#0F172A',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
            950: '#020617',
          },
          teal: {
            DEFAULT: '#0D9488',
            50: '#F0FDFA',
            100: '#CCFBF1',
            500: '#14B8A6',
            600: '#0D9488',
            700: '#0F766E',
            800: '#115E59',
          },
          amber: {
            DEFAULT: '#D97706',
            50: '#FFFBEB',
            100: '#FEF3C7',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
          },
          safe: {
            DEFAULT: '#059669',
            50: '#ECFDF5',
            500: '#10B981',
            600: '#059669',
          }
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans Devanagari"',
          'sans-serif'
        ],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
