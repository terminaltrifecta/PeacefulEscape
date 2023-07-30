/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: 
    {
      'yellow': '#FFBD59',
      'white': '#FFFEEA',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
}
