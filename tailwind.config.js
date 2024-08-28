/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF3D00',
        'secondary': '#FFA726'
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      },

    },
  },
  plugins: [],
}

