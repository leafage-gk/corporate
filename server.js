/* eslint-disable @typescript-eslint/no-var-requires */
const { Builder } = require('nuxt');
const { app, nuxt } = require('./app');

const IS_PROD = process.env.NODE_ENV === 'production';

(async function main() {
  if (!IS_PROD) {
    await new Builder(nuxt).build();
  }

  app.listen(3000);
})();
