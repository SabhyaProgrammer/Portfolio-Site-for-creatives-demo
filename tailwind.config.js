/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a18',
        paper: '#f5f2eb',
        mist: '#8a8680',
        accent: '#8b6914',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        reveal: '400ms',
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
