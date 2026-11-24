/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        preto: '#000001',
        'azul-escuro': '#1c2445',
        'azul-claro': '#c9d9ea',
        'azul-empoeirado': '#6c80a6',
        roxo: '#704e91',
      },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
