module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cta-img": "url('../images/mic.png')",
      },
      colors: {
        primary: "#ED7F39",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
