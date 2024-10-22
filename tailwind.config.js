/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter':[ "Inter", 'sans-serif'],
        'popins': ["Poppins", 'sans-serif']
      },
      backgroundImage: {
        bannerImage: "url('./src/imges/images/letshelp.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], // Enable the light and dark themes
  },
}

