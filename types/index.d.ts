import moment from 'moment';
import Vue from 'vue';
import MarkdownIt from 'markdown-it';
import { ContentfulClientApi } from 'contentful';
import { PressRepository, BlogRepository } from '~/domains/contentful';

interface InjectedByPlugin {
  $contentful: ContentfulClientApi;
  $press: PressRepository;
  $blog: BlogRepository;
  $moment: typeof moment;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

declare module '@nuxt/vue-app-edge' {
  interface Context extends InjectedByPlugin {}
}

declare module 'vue/types/vue' {
  interface Vue extends InjectedByPlugin {
    $md: MarkdownIt;
  }
}
