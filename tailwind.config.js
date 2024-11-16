const vovPlugin = require('./index.js');

module.exports = {
  content: ['./demo/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    vovPlugin,
  ],
};
