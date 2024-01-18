/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        secondary: '#ff7e33',
      },
      fontFamily: {
        display: ['ALBRA', 'serif'],
        sans: ['roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
