/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    animation: {
      fadeIn: 'fadeIn 2s ease 1 forwards',
      fadeOut: 'fadeOut 2s ease 1 forwards',
      slideIn: 'slideIn 2s ease 1',
      reorganize: 'reorganize 2s ease 1 forwards',
    },
  },
  plugins: [],
};
