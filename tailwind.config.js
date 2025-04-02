// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Custom blue
          secondary: "#F59E0B", // Custom orange
          danger: "#DC2626", // Custom red
          side:"#ececec",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }