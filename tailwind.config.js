/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f10",
        card: "#141416",
        ink: "#f2f2f3",
        mute: "#a0a0a6",
        line: "#222326",
        accent: "#8aa1b1",
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.25)" },
    },
  },
  plugins: [],
}
