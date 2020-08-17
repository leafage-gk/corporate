const colors = require('vuetify/es5/util/colors').default;

module.exports = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blueGrey.base,
        secondary: colors.teal.base,
        accent: colors.orange.base,
        error: colors.red.base,
        warning: colors.amber.base,
        info: colors.cyan.base,
        success: colors.lightGreen.base,
      },
    },
  },
};
