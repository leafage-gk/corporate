import { Configuration } from '@nuxt/types';

const vuetify: Configuration['vuetify'] = {
  treeShake: true,
  customVariables: ['~/assets/style/variables.scss'],
  defaultAssets: {
    icons: 'md',
  },
  optionsPath: './config/modules/vuetify/options.ts',
};

export default vuetify;
