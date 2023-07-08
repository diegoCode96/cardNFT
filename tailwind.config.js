/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyanB: "hsl(178, 100%, 50%)",
        darkBlueMainBG: "hsl(217, 54%, 11%)",
        darkBlueCardBG: "hsl(216, 50%, 16%)",
        darkBlueLine: "hsl(215, 32%, 27%)",
        white2: "hsl(0, 0%, 100%)",
      },
      screens: {
        'xxs':'375px'

      }
    },
  },
  plugins: [],
};
