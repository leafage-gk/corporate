/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('./package');
require('dotenv').config();

import * as contentful from 'contentful';
import {
  PressRepository,
  PressPost,
  BlogCategory,
  BlogAuthor,
  BlogPost,
  BlogRepository,
} from './domains/contentful';

let ctfClient: contentful.ContentfulClientApi;
let blogRepo: BlogRepository;
let press: PressPost[];
let blogCategories: BlogCategory[];
let blogAuthors: BlogAuthor[];
let blogPosts: BlogPost[];

function getClient(): contentful.ContentfulClientApi {
  if (!ctfClient) {
    ctfClient = contentful.createClient({
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN!,
      space: process.env.CTF_SPACE_ID!,
    });
  }
  return ctfClient;
}

function getBlogRepo(): BlogRepository {
  if (!blogRepo) {
    blogRepo = new BlogRepository(getClient());
  }
  return blogRepo;
}

async function getPress(): Promise<PressPost[]> {
  if (!press) {
    const repo = new PressRepository(getClient());
    press = await repo.all();
  }
  return press;
}

async function getBlogCategories(): Promise<BlogCategory[]> {
  if (!blogCategories) {
    const repo = getBlogRepo();
    blogCategories = await repo.category.all();
  }
  return blogCategories;
}

async function getBlogAuthors(): Promise<BlogAuthor[]> {
  if (!blogAuthors) {
    const repo = getBlogRepo();
    blogAuthors = await repo.author.all();
  }
  return blogAuthors;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  if (!blogAuthors) {
    const repo = getBlogRepo();
    blogPosts = await repo.all();
  }
  return blogPosts;
}

export default {
  mode: 'universal',

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
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    SITE_RECAPTCHA_KEY: process.env.SITE_RECAPTCHA_KEY,
    SITE_RECAPTCHA_SECRET: process.env.SITE_RECAPTCHA_SECRET,
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
  plugins: ['~/plugins/contentful', '~/plugins/filters'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    'nuxt-robots-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-133651179-1',
      },
    ],
    [
      '@nuxtjs/moment',
      {
        defaultLocale: 'ja',
        locales: ['ja'],
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

  markdownit: {
    injected: true,
    breaks: true,
    linkify: true,
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

  sitemap: {
    hostname: 'https://leafage.co.jp',
    gzip: true,
    generate: true,
    async routes() {
      const presses = await getPress();
      const blogPosts = await getBlogPosts();
      const blogCategories = await getBlogCategories();
      const blogAuthors = await getBlogAuthors();
      return [
        ...presses
          .filter(press => press.slug)
          .map(press => `/press/${press.slug!}`),
        ...blogPosts.map(blog => blog.linkTo),
        ...blogCategories.map(cate => cate.to),
        ...blogAuthors.map(author => author.to),
      ];
    },
  },

  generate: {
    async routes() {
      const presses = await getPress();
      const blogPosts = await getBlogPosts();
      const blogCategories = await getBlogCategories();
      const blogAuthors = await getBlogAuthors();
      return [
        ...presses
          .filter(press => press.slug)
          .map(press => ({
            route: `/press/${press.slug!}`,
            payload: press,
          })),
        ...blogPosts.map(blog => ({
          route: blog.linkTo,
          payload: blog,
        })),
        ...blogCategories.map(cate => cate.to),
        ...blogAuthors.map(author => author.to),
      ];
    },
  },
};
