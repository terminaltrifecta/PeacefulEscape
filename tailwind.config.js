/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: 
      {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: 
      {
        'yellow': '#FFBD59',
        'white': '#FFFEEA',
      },
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        peacefulLight: {
          "primary": "#ffd97f",
          "secondary": "#219EBC",
          "accent": "#1fb2a6",
          "neutral": "#FAF8ED",
          "base-100": "#f4f3ee",
          "base-200": "#DBD9CF",
          "base-300": "#B4B2A5",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
