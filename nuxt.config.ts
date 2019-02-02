// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package');
require('dotenv').config();

// import contentful from 'contentful';
// import { BlogPost } from './domains/contentful';

// const ctfClient = contentful.createClient({
//   accessToken: process.env.CTF_CDA_ACCESS_TOKEN!,
//   space: process.env.CTF_SPACE_ID!
// });

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
        rel: 'stylesheet',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      //   content: `${envSet.BASE_URL}/images/common/ogp.png`,
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
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/contentful'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    'nuxt-webfontloader',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-133651179-1',
      },
    ],
  ],

  vuetify: {
    // Vuetify options
    theme: {
      primary: '#8bc34a',
      secondary: '#9c27b0',
      accent: '#e91e63',
      error: '#f44336',
      warning: '#ffc107',
      info: '#00bcd4',
      success: '#009688',
    },
  },

  webfontloader: {
    google: {
      families: ['M PLUS Rounded 1c', 'Nico Moji'],
    },
  },

  /*
   ** Build configuration
   */
  build: {
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl'],
      },
    },
  },

  // generate: {
  //   async routes() {
  //     const entries = await ctfClient.getEntries<IBlogPost>({
  //       content_type: 'newsPost'
  //     });
  //     return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)];
  //   }
  // }
};
