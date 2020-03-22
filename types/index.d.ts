import { ContentfulClientApi } from 'contentful';
import MarkdownIt from 'markdown-it';
import moment from 'moment';
import Vue from 'vue';

import { PressRepository } from '~/domains/contentful';

interface InjectedByPlugin {
  $contentful: ContentfulClientApi;
  $press: PressRepository;
  $moment: typeof moment;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

declare module '@nuxt/types' {
  interface Context extends InjectedByPlugin {}
}

declare module 'vue/types/vue' {
  interface Vue extends InjectedByPlugin {
    $md: MarkdownIt;
  }
}
