declare module '~/assets/*' {
  const url: string;
  export default url;
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue-scrollmagic';

declare module 'splitting';
