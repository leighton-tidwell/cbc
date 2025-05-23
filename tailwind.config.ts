import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#737373',
        'primary-white': '#ffffff',
        'bg-color': '#f8f8f8',
        'text-color': '#333333',
        'text-light': '#666666',
        'accent-color': '#e5e5e5',
        'accent-dark': '#cccccc',
        'highlight-color': '#737373',
        'gray-light': '#f5f5f5',
        'gray-medium': '#737373',
        'gray-dark': '#555555',
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      transitionDuration: {
        default: '300ms',
      },
      transitionTimingFunction: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
