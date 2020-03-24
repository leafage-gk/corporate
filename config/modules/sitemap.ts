import config from '../const';
import { getPress } from '../lib/press';

export default {
  hostname: config.url,
  gzip: true,
  async routes() {
    const presses = await getPress();
    return [
      ...presses
        .filter(press => press.slug)
        .map(press => `/press/${press.slug}`),
    ];
  },
};
