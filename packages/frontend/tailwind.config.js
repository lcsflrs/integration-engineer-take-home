/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-gray-1": "#3B3B3B",
        "brand-gray-2": "#2D2D2D",
        "brand-gray-3": "#1F1F1F",
        "brand-purple": "#646cff",
      },
      boxShadow: {
        purple: "0 0 3px 3px #646cff50",
        white: "0 0 3px 3px #ffffff50",
        green: "0 0 3px 3px #00ff0030",
      },
    },
  },
  plugins: [],
};
