/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Mudança aqui: adicionámos o @tailwindcss/
  },
};

export default config;