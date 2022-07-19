/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace']
      },
      colors: {
        'chinese-black': "#13171b",
        'chinese-black-2': "#0a1620",
        'chinese-black-3': "#09131b",
        'dark-jungle-green': "#0c1a25",
        'carmine': "#DA0037",
        'rich-black': "#070f15",
        'dark-gunmetal': "#1F262C"
      }
    },

  },
  plugins: [],
}
