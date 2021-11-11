const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  // prettier-ignore
  theme: {
    boxShadow :{
      grayBox: "6px 6px 0 0 #696969"
    },
    extend: {
      backgroundImage: {
        "hero" : "url('../src/images/hero-back.jpg')",
        "hero-small":"url('../src/images/hero-small.jpg')",
        "quote" : "url('../src/images/quote.jpg')"
      },
      colors: {
        skyBlue: "#1AB5C8",
        newGray : "#696969",
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        purple: colors.purple,
      },
      fontFamily: {
        'sans': ['Nunito', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        '6xl': ['60px', {
          lineHeight:'1.5'
        }]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
