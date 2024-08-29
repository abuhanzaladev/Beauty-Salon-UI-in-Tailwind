/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        oldStandard: ["'Old Standard TT'", 'serif'],  // Note the use of single quotes around font name with spaces
        jost: ["'Jost'", 'sans-serif'],
        textShadow: {
          // Custom text shadow utilities
          sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
          xl: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
}
