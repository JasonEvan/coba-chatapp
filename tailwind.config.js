/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        satoshir: ["Satoshi-Regular"],
        satoshib: ["Satoshi-Bold"],
        pregular: ["Poppins-Regular"],
        pmedium: ["Poppins-Medium"],
        pbold: ["Poppins-Bold"],
      },
      colors: {
        primary: "#18837D",
        inactive: "#5F6368",
        mainbg: "#F9F9F9",
        inactivetab: "#7E7E81",
        divider: "#8593A8",
      },
    },
  },
  plugins: [],
};
