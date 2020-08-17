import dotenv from 'dotenv';
dotenv.config();

import { Configuration } from '@nuxt/types';

import env from './config/env';
import head from './config/head';
import googleAnalytics from './config/modules/google-analytics';
import moment from './config/modules/moment';
import sitemap from './config/modules/sitemap';
import vuetify from './config/modules/vuetify';

const configuration: Configuration = {
  mode: 'universal',
  head,
  env,
  loading: { color: 'white' },
  css: ['~/assets/style/app.scss'],
  plugins: ['~/plugins/inject'],
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', 'nuxt-robots-module'],
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
};

export default configuration;
