/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const env = require('./src/config/env');
const head = require('./src/config/head');
const googleAnalytics = require('./src/config/modules/google-analytics');
const moment = require('./src/config/modules/moment');
const sitemap = require('./src/config/modules/sitemap');
const vuetify = require('./src/config/modules/vuetify');

module.exports = {
  mode: 'universal',
  telemetry: false,
  head,
  env,
  srcDir: './src',
  loading: { color: 'white' },
  css: ['./assets/style/app.scss'],
  plugins: ['./plugins/inject'],
  modules: ['@nuxtjs/amp', '@nuxtjs/axios', '@nuxtjs/sitemap'],
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    'nuxt-webfontloader',
  ],
  sitemap,
  googleAnalytics,
  moment,
  vuetify,
  build: {
    standalone: true,
  },
  render: {
    etag: false,
    compressor: { threshold: Infinity },
  },
};
