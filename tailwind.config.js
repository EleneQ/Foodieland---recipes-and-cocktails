/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
      },
      colors: {
        "primary-blue-300": "#E7F9FD",
        "gray-400": "#00000099",
        "gray-500": "#0000000D",
      },
      height: {
        "hero-height-lg": "620px",
      },
      backgroundImage: {
        "primary-blue-gradient":
          "linear-gradient(180deg, rgba(231, 249, 253, 0.00) 0%, #E7F9FD 100%)",
      },
    },
  },
  plugins: [],
};
