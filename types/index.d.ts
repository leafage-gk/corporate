import Vue, { ComponentOptions } from 'vue';
import { ContentfulClientApi } from 'contentful';

declare module '*.vue' {
  const _default: ComponentOptions<Vue>;
  export default _default;
}

interface InjectedByPlugin {
  $contentful: ContentfulClientApi;
}

declare module '@nuxt/vue-app-edge' {
  interface Context extends InjectedByPlugin {}
}

declare module 'vue/types/vue' {
  interface Vue extends InjectedByPlugin {}
}
