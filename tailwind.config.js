/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dindz-primary": "#3A9F3D",
        "dindz-text": "#606060",
      },
    },
    fontFamily: {
      Prompt: ["Prompt, san-serif"],
      Kalra: ["Karla, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    // },
  },
  plugins: [],
};
