/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        DuneRise: ["DuneRise", "sans-serif"],
        // Add more custom font families as needed
      },
      colors: {
        primary: "#0FB4C3 ",
        primaryO: "rgba(15, 180, 195, 0.1)",
        primary1: "rgba(15, 180, 195, 0.5)",

        background: "#EEEEEE",
        layoutColor: "#F8F8FF",
        layoutColor: "#f8f9fa",
        secondary: "#C0C0C0",
        BlackO: "#111111",
      },
    },
  },
  plugins: [require("daisyui")],
};
