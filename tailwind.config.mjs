/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Signal red — fire safety's own code colour. Reserved for CTAs,
          // credential badges, and emphasis. Never decorative.
          accent:         '#C6202A',
          'accent-dark':  '#9E1820',
          'accent-light': '#DC3A44',
          'on-accent':    '#FFFFFF',
          // Cold near-black. Deliberately colder than WPG Roofing's warm
          // graphite so the two builds don't read as siblings.
          dark:         '#0B0B0D',
          'dark-2':     '#17171B',
          light:        '#F7F7F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
