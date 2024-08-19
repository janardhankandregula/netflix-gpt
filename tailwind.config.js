/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "custom-rgb": "rgba(205, 0, 0, 0.8)", // Example RGB color
      },
      boxShadow: {
        "custom-shadow": "0 4px 8px rgba(0, 0, 0, 0.5)", // Example shadow
      },
    },
  },
  variants: {},
  plugins: [],
};
