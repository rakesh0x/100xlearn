/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      Blue: {
        '500': "#0b0a10",
        '900': "#030613"
      },
      white: {
        '500': "#f7fbfd"
      },
      

    },
  },
  plugins: [],
}