const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  daisyui: {
    themes: ["autumn"],
  },
  plugins: [require("flyonui"), require('daisyui'), flowbite.plugin(),],
}

