/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        harabara: ["Harabara", "sans-serif"], // Aggiungi il tuo font qui
      },
      colors: {
        customBg: "#F8F5E1",
      },
    },
  },
  plugins: [],
};
