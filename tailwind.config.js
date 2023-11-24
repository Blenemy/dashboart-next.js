/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: ["checked"],
      backgroundColor: ["checked"],
      colors: {
        customViolet: "#6764F2",
        descriptionText: "#6B6B7B",
        darkBg: "#292930",
        tabsTitle: "#9C9CB0",
        cardYellow: "#EFB62B",
        lightBg: "#303038",
        borderColor: "#F5F5F514",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      extend: {
        fontFamily: {
          smalls: ["TT Smalls", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
