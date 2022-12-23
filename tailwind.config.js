/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        "2xs": "0.6875rem", // 11px
        "3xs": "0.625rem", // 10px
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
