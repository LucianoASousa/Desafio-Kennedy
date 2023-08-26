/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        "sucess" : "#12DB89",
        "error" : "#F95E5A",
        "default" : "#B1ADB9",
        "primary-danger" : "#F95E5A",
        "primary-success" : "#0DCB7D",
        "primary-neutral" : "#365DF0",
        "hover-danger" : "#CC4C4C",
        "hover-success" : "#10B26C",
        "hover-neutral" : "#2F55CC",
        "click-danger" : "#A53F3F",
        "click-success" : "#0E995D",
        "click-neutral" : "#244AA8",
        "disabled-danger" : "#FCAEAC",
        "disabled-success" : "#88EDC4",
        "disabled-neutral" : "#B9C6FA",
        "darker-blue" : "#244AA8",
        "dark-blue" : "#2F55CC",
        "blue" : "#365DF0",
        "light-blue" : "#9AAEF7",
        "lighter-blue" : "#B9C6FA",
        "lightest-blue" : "#CAD6FC",
        "most-lightest-blue" : "#E1E7FD",
      },
      screens: {
        '2xl': {'max': '1535px'},
  
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'},
      },
      boxShadow: {
        "card" : "0px 5px 7px #0000000D",
        "modal" : "0px 20px 25px #0000001A",
      }
    },
  },
  plugins: [],
}

