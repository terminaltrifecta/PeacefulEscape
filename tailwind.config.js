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
    themes: [
      {
        peacefulLight: {
          "primary": "#FFB703",
          "secondary": "#219EBC",
          "accent": "#1fb2a6",
          "neutral": "#2a323c",
          "base-100": "#f4f3ee",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
