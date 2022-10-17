/** @type {import('tailwindcss').Config} */
const colors = {
  'chinese-black': '#13171b',
  'chinese-black-2': '#0a1620',
  'chinese-black-3': '#09131b',
  'dark-jungle-green': '#0c1a25',
  carmine: '#DA0037',
  'rich-black': '#070f15',
  'dark-gunmetal': '#1F262C',
  'html-brand': '#e34f26',
  'css-brand': '#264de4',
  'js-brand': '#F0DB4F',
  'react-brand': '#61DBFB',
  'react-native-brand': '#61DBFB',
  'node-brand': '#3c873a',
  'adonis-brand': '#660066',
  'nestjs-brand': '#E0234E',
  'express-brand': '#68A063',
  'electron-brand': '#4C8D99',
  'c-charp-brand': '#A179DC',
  'mongodb-brand': '#4DB33D',
  'sql-server-brand': '#A91D22',
  'postgre-sql-brand': '#0064a5',
}

module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'],
      },
      colors: colors,
    },
  },
  plugins: [],
  safelist: [
    ...Object.keys(colors)
      .map((color) => color)
      .map((c) => [`hover:text-`].map((f) => `${f}${c}`))
      .flat(3),
  ],
}
