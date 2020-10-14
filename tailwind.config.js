module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./pages/*.js", "./pages/*.tsx", "./components/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
