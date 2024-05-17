/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   
  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('https://wallpapers.com/images/high/marvel-s-moon-knight-5120-x-1440-qk9wyp1zn5z7lsl4.webp')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


