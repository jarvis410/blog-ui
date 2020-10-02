module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts']
  },
  theme: {
    container: {
      center: true,
    },
    inset: {
      '0': '0rem',
      '1': '0.5rem',
      '2': '1rem',
      '3': '2rem',
      '4': '4rem',
    }
  },
});
