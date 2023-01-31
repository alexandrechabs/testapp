module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        welmo: {
          blue: "#00283D",
          "blue-hover": "#003754",
        },
        translucid: {
          500: "#ffffff66",
          600: "#ffffff88",
          700: "#ffffffaa",
          800: "#ffffffcc",
          900: "#ffffffee",
        },
      },
    },
  },
  plugins: [],
};
