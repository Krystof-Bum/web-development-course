/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inner: "0 15px 20px -15px rgba(150, 150, 150, 0.5) inset",
      },
      colors: {
        customLightGray: "hsl(0, 0%, 52%)",
        darkModeBlack: "#121212",
      },
    },
  },
  plugins: [],
};
