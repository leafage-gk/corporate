<template>
  <v-content>準備中</v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/vue-app-edge';

export default Vue.extend({
  async asyncData(context: Context) {
    const posts = await context.$blog.all();
    return {
      posts,
      items: [
        {
          text: 'TOP',
          to: '/',
          exact: true,
          disabled: false,
        },
        {
          text: 'プレスリリース一覧',
          to: '/press',
          exact: true,
          disabled: true,
        },
      ],
    };
  },
  head() {
    return {
      title: 'プレスリリース一覧',
    };
  },
});
</script>
