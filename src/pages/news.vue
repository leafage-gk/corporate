<template>
  <v-main>
    <page-container :items="items">
      <v-col cols="12" v-if="posts">
        <v-row justify="start" align="center" class="ma-4">
          <v-subheader><h2>最新情報</h2></v-subheader>
        </v-row>
        <v-row
          class="my-3 px-2 px-md-0"
          v-for="(item, index) in posts.contents"
          :key="index"
        >
          <press-summary
            :slug="item.slug"
            :image="item.thumbnail ? item.thumbnail.url : undefined"
            :title="item.title"
            :summary="item.summary"
            :press-type="item.type.title"
            :published-at="item.publishedAt"
          />
        </v-row>
      </v-col>
    </page-container>
  </v-main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue';

import { PressPostSummaryResponse } from '~/domains/press';

export default Vue.extend({
  components: {
    PageContainer: () => import('~/components/molecules/PageContainer.vue'),
    PressSummary: () => import('~/components/molecules/PressSummary.vue'),
  },
  data() {
    return {
      posts: undefined as PressPostSummaryResponse | undefined,
      items: [] as {
        text: string;
        to: string;
        exact: boolean;
        disabled: boolean;
      }[],
    };
  },
  async asyncData(context: Context) {
    // const posts = await context.$press.fetchRecently('2u9ctzqlxi', 0, 10);
    const posts = await context.$press.fetchRecentlyAll();
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
          text: '最新情報一覧',
          to: '/news',
          exact: true,
          disabled: true,
        },
      ],
    };
  },
  head: {
    title: '最新情報一覧',
    link: [
      {
        rel: 'canonical',
        href: 'https://leafage.co.jp/news',
        id: 'canonical',
      },
    ],
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://leafage.co.jp/news',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '最新情報一覧',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: '最新情報一覧',
      },
    ],
  },
});
</script>
