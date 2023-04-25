/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#F81539",
        secondary: "#FC4308",
        black: "#3E3232",
        white: "#FFFFFF",
        stroke: "#E6E6E6",
        dark: "#000000",
        gray: "#F5F5F5",
      },
      backgroundImage: {
        gradient: "linear-gradient(270deg, #F81539 0%, #FC4308 94%)",
      },
      fontFamily:{
        'roboto':'Roboto'
      }
    },
    container: {
      center: true,
    },
    screens: {
      xs: "300px",
      sm: "428px",
      md: "576px",
      lg: "768px",
      xl: "992px",
      "2xl": "1200px",
      "3xl": "1600px",
      "4xl": "1920px",
    },
  },
  corePlugins: {
    // preflight: false,
  },
  plugins: [],
};
