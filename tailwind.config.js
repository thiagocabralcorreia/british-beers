/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  content: [
    " . /pages/**/*.{js, ts, jsx, tsx}",
    ". /components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#232C63",
        secondary: "#C82030",
        tertiary: "#FEC70A",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      fontSize: {
        xm: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "36px",
        "3xl": "44px",
      },
    },
  },
  plugins: [],
};
