/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
        cancel: "#F4F4F4",
        delete: "#ED4C5C",
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
