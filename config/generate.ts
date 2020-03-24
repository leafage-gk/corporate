import { Configuration } from '@nuxt/types';

import { getPress } from './lib/press';

const generate: Configuration['generate'] = {
  routes: async () => {
    const presses = await getPress();
    return [
      ...presses
        .filter(press => press.slug)
        .map(press => ({
          route: `/press/${press.slug}`,
          payload: press,
        })),
    ];
  },
};

export default generate;
