/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kfgq: ["kfgq"],
      HindSiliguri: ["Anek Bangla"],
      SolaimanLipi: [" Noto Serif, SolaimanLipi, sans-serif;"],
    },
    extend: {
      colors: {
        primary: {
          50: "#e9fcef",
          100: "#d3f8e0",
          200: "#a7f1c1",
          300: "#7beaa2",
          400: "#4fe383",
          500: "#22dd64",
          600: "#1cb050",
          700: "#15843c",
          800: "#0e5828",
          900: "#072c14",
          950: "#051f0e",
        },
      },
    },
  },
  plugins: [],
};
