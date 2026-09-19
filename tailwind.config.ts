import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f6f3',
          100: '#ecebe5',
          200: '#d6d3c8',
          300: '#b9b3a3',
          400: '#8c8675',
          500: '#5d5847',
          600: '#3f3b30',
          700: '#2a2720',
          800: '#1a1814',
          900: '#0c0b09',
        },
        gold: {
          50: '#fbf7ec',
          100: '#f3e9c6',
          200: '#e7d28a',
          300: '#d6b454',
          400: '#c39a32',
          500: '#a37e25',
          600: '#7e601c',
          700: '#5a4413',
          800: '#3a2c0c',
          900: '#1f1707',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out both',
        'rise': 'rise 700ms ease-out both',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        rise: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

export default config;
