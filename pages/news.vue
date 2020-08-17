<template>
  <v-content>
    <page-container :items="items">
      <v-col cols="12" v-if="posts">
        <v-row justify="start" align="center" class="ma-4">
          <v-subheader><h2>ニュース</h2></v-subheader>
        </v-row>
        <v-row
          class="my-3"
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
  </v-content>
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
    const posts = await context.$press.fetchRecently('2u9ctzqlxi', 0, 10);
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
          text: 'ニュース',
          to: '/news',
          exact: true,
          disabled: true,
        },
      ],
    };
  },
  head: {
    title: 'ニュース',
  },
});
</script>
