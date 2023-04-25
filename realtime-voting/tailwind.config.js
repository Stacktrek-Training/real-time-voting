/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js, jsx, ts, tsx}",
    "./node_modules/flowbite/**/*.jsx",
    "./src/components//*.{js,ts,jsx,tsx}",
    "./src/app//.{js,ts,jsx,tsx}",
    "./public/**/.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

