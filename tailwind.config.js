/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "black-1": "#020203",
      "white-1": "#F3F3F4",
      "gray-1": "#A6A9AA",
      "green-1": "#02F74C",
      "green-2": "#1D5D33",
      "green-3": "#089729",
      "green-4": "#19C84A",
      "green-5": "#76A988",
    },
  },
  plugins: [],
};
