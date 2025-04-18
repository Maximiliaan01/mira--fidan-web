/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Daha koyu mavi
        secondary: '#D97706', // Daha koyu altın/turuncu
        background: '#F8F5FF', // Hafif mor tonu
        darkbg: '#1F2937', // Koyu arka plan
        text: '#111827', // Neredeyse siyah
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 