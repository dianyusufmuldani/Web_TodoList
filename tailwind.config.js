/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
      },
      height: {
        105: "105px",
      },
      padding: {
        220: "200px",
        38: "38px",
      },
    },
  },
  plugins: [],
};
