/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
[
"./Pages/**/*.html",
"./src/**/*.{html,js}",
"./*.{html,js}",
"./node_modules/flowbite/**/*.js",

],

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}