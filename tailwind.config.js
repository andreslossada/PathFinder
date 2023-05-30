/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    dropShadow: {
      glow: [
        "0 0px 10px rgba(255,255, 255, 0.6)",
        // "0 0px 25px rgba(255, 255,255, 0.5)",
      ],
      dark: [
        "0 0px 20px rgba(0,0, 0, 0.30)",
        // "0 0px 25px rgba(0, 0,0, 0.5)",
      ],
    },
  },
  plugins: [],
};
