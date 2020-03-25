<template>
  <v-content>
    <page-container :items="items">
      <v-container fluid>
        <v-row justify="start" align="center" class="ma-4">
          <v-subheader><h2>ニュース一覧</h2></v-subheader>
        </v-row>
        <client-only placeholder="Loading...">
          <v-row class="my-3" v-for="(item, index) in posts" :key="index">
            <press-summary
              :to="item.linkTo"
              :href="item.linkHref"
              :image="item.summaryImage"
              :title="item.title"
              :body="item.summary"
              :published-at="item.publishedAt"
            />
          </v-row>
        </client-only>
      </v-container>
    </page-container>
  </v-content>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue';

import PageContainer from '~/components/molecules/PageContainer.vue';
import PressSummary from '~/components/molecules/PressSummary.vue';
import { PressPostSummary } from '~/domains/contentful';

export default Vue.extend({
  components: {
    PageContainer,
    PressSummary,
  },
  data() {
    return {
      posts: [] as PressPostSummary[],
      items: [] as {
        text: string;
        to: string;
        exact: boolean;
        disabled: boolean;
      }[],
    };
  },
  async asyncData(context: Context) {
    const posts = await context.$press.fetchRecently(0, 10);
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
          text: 'ニュース一覧',
          to: '/press',
          exact: true,
          disabled: true,
        },
      ],
    };
  },
  head: {
    title: 'ニュース一覧',
  },
});
</script>
