/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1312px",
      xxl: "1312px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      albert: ['"Albert Sans", sans-serif;'],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },
    boxShadow: {
      base: "0px 4px 20px 2px rgba(43, 31, 137, 0.08);",
    },

    extend: {
      colors: {
        primary: "#2890FF",
        title: "#202586",
        body: "#A0A3DB",
        light: "#F7F5FF",
      },
    },
  },
  plugins: [],
};



 