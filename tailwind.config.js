/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#eef1ff",
          200: "#dbe1ff",
          300: "#c2ccff",
          400: "#9ca8ff",
          500: "#6f7cff",
          600: "#4b57ff",
          700: "#3641f0",
          800: "#2c34c2",
          900: "#242d99"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 23, 42, 0.08)",
        card: "0 12px 24px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
