import moment from 'moment';
import Vue from 'vue';
import MarkdownIt from 'markdown-it';
import { ContentfulClientApi } from 'contentful';
import { PressRepository } from '~/domains/contentful';

interface InjectedByPlugin {
  $contentful: ContentfulClientApi;
  $press: PressRepository;
  $moment: typeof moment;
  payload?: {};
}

declare module '@nuxt/vue-app-edge' {
  interface Context extends InjectedByPlugin {}
}

declare module 'vue/types/vue' {
  interface Vue extends InjectedByPlugin {
    $md: MarkdownIt;
  }
}
