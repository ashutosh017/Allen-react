/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // allen_theme:'#10182400'
        allen_theme:'rgba(16,24,36)'
        ,
        // allen_theme_hover:'rgba(61,77,102,1)'
        allen_theme_hover:'#475c7b'
        // allen_theme:'blue'
      }
    },
  },
  plugins: [],
}