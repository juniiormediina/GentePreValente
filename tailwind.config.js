module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
        DEFAULT: "#2F3337",
        light: "#F3F3F3",
        lightest: "#E5E7EB",
      },
      blue: "#26B4FF",
      green: "#14CF10",
      red: "#D10B0B",
      white: "#ffffff",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
