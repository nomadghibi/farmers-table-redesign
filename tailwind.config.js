module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#163A2B",
        "brand-cream": "#F6F1E7",
        "brand-oat": "#E8DDC8",
        "brand-gold": "#C89B3C",
        "brand-brown": "#7A5A3A",
        "brand-charcoal": "#2A2A2A",
        "brand-sage": "#8D9F8B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(22, 58, 43, 0.08)",
      },
    },
  },
  plugins: [],
}
