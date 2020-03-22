/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('./package');
require('dotenv').config();

import { Configuration } from '@nuxt/types';
import * as contentful from 'contentful';

import { PressPost, PressRepository } from './domains/contentful';

let ctfClient: contentful.ContentfulClientApi;
let press: PressPost[];

function getClient() {
  if (!ctfClient) {
    ctfClient = contentful.createClient({
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN!,
      space: process.env.CTF_SPACE_ID!,
    });
  }
  return ctfClient;
}

async function getPress() {
  if (!press) {
    const repo = new PressRepository(getClient());
    press = await repo.all();
  }
  return press;
}

const configuration: Configuration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Web受託開発,ネイティブアプリ開発,サイト制作,モバイルサイト制作',
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://leafage.co.jp' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '',
        template: (chunk: string) =>
          chunk ? `${chunk} | リーフエイジ合同会社` : 'リーフエイジ合同会社',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description,
      },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: 'https://leafage.co.jp/images/leafage.png',
      // },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '',
        template: (chunk: string) =>
          chunk ? `${chunk} | リーフエイジ合同会社` : 'リーフエイジ合同会社',
      },
      { hid: 'twitter:card', name: 'twitter:card', content: pkg.description },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: '',
        template: (chunk: string) =>
          chunk ? `${chunk} | リーフエイジ合同会社` : 'リーフエイジ合同会社',
      },
    ],
    titleTemplate: `%s | リーフエイジ合同会社`,
    title: 'リーフエイジ合同会社',
  },

  env: {
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN!,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID!,
    SITE_RECAPTCHA_KEY: process.env.SITE_RECAPTCHA_KEY!,
    SITE_RECAPTCHA_SECRET: process.env.SITE_RECAPTCHA_SECRET!,
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/contentful', '~/plugins/filters'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    'nuxt-robots-module',
  ],

  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],

  markdownit: {
    injected: true,
    breaks: true,
    linkify: true,
  },

  sitemap: {
    hostname: 'https://leafage.co.jp',
    gzip: true,
    generate: true,
    async routes() {
      const presses = await getPress();
      return [
        ...presses
          .filter(press => press.slug)
          .map(press => `/press/${press.slug!}`),
      ];
    },
  },

  googleAnalytics: {
    id: 'UA-133651179-1',
  },

  momemt: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  vuetify: {
    customVariables: ['~/assets/style/variables.scss'],
    defaultAssets: {
      font: {
        family: 'M PLUS Rounded 1c',
      },
      icons: 'md',
    },
    optionsPath: './vuetify.options.ts',
  },

  generate: {
    routes: async () => {
      const presses = await getPress();
      return [
        ...presses
          .filter(press => press.slug)
          .map(press => ({
            route: `/press/${press.slug!}`,
            payload: press,
          })),
      ];
    },
  },
};

export default configuration;
