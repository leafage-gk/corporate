declare module '~/assets/*' {
  const url: string;
  export default url;
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}