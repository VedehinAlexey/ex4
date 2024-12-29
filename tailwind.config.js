/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./author/*.html",
    "./src/**/*.{js, html}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1280px",
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
      }
    },
    extend: {},
  },
  plugins: [],
}