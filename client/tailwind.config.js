// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "heading-pic": "url('./src/assets/images/heading.jpg')",
//       },
//       colors: {
//         primary: "#FFF7EB",
//         secondary: "#EADBC8",
//         accent: "#3B342A",
//         white: "#ffffff",
//         black: "#000000",
//         gray: "#9ca3af"
//         // Add more custom colors as needed
//       },
//       fontFamily: {
//         sans: ['josefin-sans', 'sans-serif'],
//         // Add more fonts as needed
//       },
//     },
    
//   },
//   plugins: [require("daisyui")],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
