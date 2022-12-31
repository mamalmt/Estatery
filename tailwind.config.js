/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      JakartaFont: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      Gray: "#E8E6F9",
      PaleGray: "#F7F7FD",
      Dork: "#000929",
      Palewhite: "rgba(255, 255, 255, 0.4)",
      Sea: "#100A55",
      PaleBlue: "#7065F0",
      PaleDork: "#4D5461",
      white: "#FFFFFF",
      Beige: "rgba(224, 222, 247, 0)",
      PalePurple: "rgba(224, 222, 247, 1)",
    },
    
    extend: {},
  },

  plugins: [],
};
