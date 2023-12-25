/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        Clicker_Script: ["Clicker Script"],
        ppWoodland:['PP Woodland'],
      },
      colors: {
        custom_grey: ["#B3B5B7"],
        mehndi: ["#838E52"],
      },
    },
  },
  plugins: [],
};
