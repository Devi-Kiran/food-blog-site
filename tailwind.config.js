/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackShade: "rgba(0,0,0,0.5)",
        sideMenuBackgroundColor: "#1C2123",
        sCBGC: "#1C2123",
        borderColorY: "#666666",
        pink: "#EF3D5B",
        green: "#57B957"
      }
    },
  },
  plugins: [],
}

