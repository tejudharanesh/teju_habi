/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        // Add more custom font families as needed
      },
      colors: {
        'primary': '#0FB4C3',
        'secondary': '#F2F2F2',
        'tertiary': '#E0E0E0',
        'quaternary': '#BDBDBD',
        'quinary': '#9E9E9E',
      },

    },
  },
  plugins: [require("daisyui")],
};
