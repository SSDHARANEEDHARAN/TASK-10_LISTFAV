module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.875rem", // Reduced size for smaller components
        base: "1rem",
      },
      padding: {
        sm: "0.25rem", // Smaller padding
        md: "0.5rem",
      },
    },
  },
  plugins: [],
};
