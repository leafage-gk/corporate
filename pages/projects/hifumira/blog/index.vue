<template>
  <v-content>
    <blog-hero-header />
    <v-container class="m-plus-rounded-1c">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      <v-layout column>
        <v-subheader><h2>新着ブログ一覧</h2></v-subheader>
        <no-ssr>
          <v-flex v-bind:key="item.id" v-for="(item, index) in posts">
            <blog-summary
              :to="item.linkTo"
              :image="item.summaryImage"
              :title="item.title"
              :author="item.author"
              :body="item.summary"
              :categories="item.categories"
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
import BlogSummary from '~/components/BlogSummary.vue';
import BlogHeroHeader from '~/components/BlogHeroHeader.vue';

export default Vue.extend({
  components: {
    BlogSummary,
    BlogHeroHeader,
  },
  async asyncData(context: Context) {
    const posts = await context.$blog.fetchRecently(0, 10);
    return {
      posts,
      items: [
        {
          text: 'TOP',
          to: '/projects/hifumira',
          exact: true,
          disabled: false,
        },
        {
          text: '新着ブログ一覧',
          to: '/projects/hifumira/blog',
          exact: true,
          disabled: true,
        },
      ],
    };
  },
  head() {
    return {
      title: '新着ブログ一覧 - VTuberプロジェクト＊ひふみら',
    };
  },
});
</script>
