/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all files in src with relevant extensions
  ],
  theme: {
    fontFamily: {
      primary: "Poppins",
      body: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#ffffff",
        tertiary: "#000000",
      },
    },
  },
  plugins: [],
};
