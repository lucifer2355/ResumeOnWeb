/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#020203",
      white: "#F3F3F4",
      gray: "#A6A9AA",
      "green-100": "#02F74C",
      "green-200": "#1D5D33",
      "green-300": "#089729",
      "green-400": "#19C84A",
      "green-500": "#76A988",
    },
  },
  plugins: [],
};
