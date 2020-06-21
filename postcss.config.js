module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-nested': {},
    'postcss-url': { url: 'rebase' },
    'postcss-normalize': {},
    autoprefixer: {},
  },
};
