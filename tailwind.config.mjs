/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange:       '#E8721C',
          'orange-dark': '#C55E0F',
          'orange-light': '#F0892A',
          dark:         '#0F172A',
          'dark-2':     '#1E293B',
          light:        '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
