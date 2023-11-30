/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./dist/*.{html,js}",
  ],
  theme: {
    extend: {
        fontFamily: {
        banana: "Madura",
      },
      backgroundImage: {
        walpaper : "url('/dist/image/walpaper.jpg')",
        comonity : "url('/dist/image/comonity.jpeg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

