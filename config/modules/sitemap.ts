import axios from 'axios';

import config from '../const';
import env from '../env';

export default {
  hostname: config.url,
  gzip: true,
  async routes() {
    // TODO 10件以上になったらoffset,limitで取得する
    const presses = await axios.get('https://leafage.microcms.io/api/v1/news', {
      params: {
        fields: 'slug,updatedAt',
      },
      headers: {
        'X-API-KEY': env.MICROCMS_X_API_KEY,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return presses.data.contents.map((item: any) => {
      return {
        url: `/press/${item.slug}`,
        lastmod: item.updatedAt,
      };
    });
  },
};
