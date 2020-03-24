import { UserVuetifyPreset } from 'vuetify';
import colors from 'vuetify/es5/util/colors';

const preset: UserVuetifyPreset = {
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

export default preset;
