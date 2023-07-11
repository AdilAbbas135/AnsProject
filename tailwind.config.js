/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cr-primary": "#4b1dff",
        "cr-secondary": "#59c9e9",
        "text-color": "#344551",
        "main-bg-color": "#F7F7F7",
      },
      screens: {
        medium: "820px",
        small: "550px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
