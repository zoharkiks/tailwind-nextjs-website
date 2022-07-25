/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Using custom fonts
      // fontFamily: {
      //   worldwide: ["WorldwideHeadline", "cursive"],
      //   blooming: ["Blooming Elegant Sans", "cursive"],
      //   poppins: ["Poppins", 'sans-serif']
      // },
    },
  },
  plugins: [],
}
