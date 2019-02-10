<template>
  <v-content>
    <v-container>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      <v-layout column>
        <v-subheader><h2>プレスリリース一覧</h2></v-subheader>
        <no-ssr>
          <v-flex v-bind:key="item.id" v-for="(item, index) in posts">
            <press-summary
              :to="item.linkTo"
              :href="item.linkHref"
              :image="item.summaryImage"
              :title="item.title"
              :body="item.summary"
              :published-at="item.publishedAt"
            />
            <v-divider v-if="index < posts.length" />
          </v-flex>
        </no-ssr>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/vue-app-edge';
import PressSummary from '~/components/PressSummary.vue';

export default Vue.extend({
  components: {
    PressSummary,
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
