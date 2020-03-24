import dotenv from 'dotenv';
dotenv.config();

import { Configuration } from '@nuxt/types';

import env from './config/env';
import generate from './config/generate';
import head from './config/head';
import googleAnalytics from './config/modules/google-analytics';
import markdownit from './config/modules/markdownit';
import moment from './config/modules/moment';
import sitemap from './config/modules/sitemap';
import vuetify from './config/modules/vuetify';

const configuration: Configuration = {
  mode: 'universal',
  head,
  env,
  loading: { color: 'white' },
  css: ['~/assets/style/app.scss'],
  plugins: ['~/plugins/contentful', '~/plugins/filters'],
  build: {
    transpile: [/typed-vuex/],
  },
  modules: ['@nuxtjs/markdownit', '@nuxtjs/sitemap', 'nuxt-robots-module'],
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    'nuxt-webfontloader',
    'nuxt-typed-vuex',
  ],
  generate,
  markdownit,
  sitemap,
  googleAnalytics,
  moment,
  vuetify,
};

export default configuration;
