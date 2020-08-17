/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

const config = require('../const');
const env = require('../env');

module.exports = {
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
    return presses.data.contents.map((item) => {
      return {
        url: `/press/${item.slug}`,
        lastmod: item.updatedAt,
      };
    });
  },
};
