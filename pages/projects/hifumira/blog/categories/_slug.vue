<template>
  <v-content>
    <blog-hero-header :subtitle="category.name" />
    <v-container class="m-plus-rounded-1c">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      <v-layout column>
        <v-subheader>
          <h2>カテゴリ - {{ category.name }}</h2>
        </v-subheader>
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
import { BlogPostSummary, BlogCategory } from '~/domains/contentful';

interface Data {
  posts: BlogPostSummary;
  category: BlogCategory;
  items: {
    text: string;
    to: string;
    disabled: boolean;
  }[];
}

export default Vue.extend<Data, {}, {}, never>({
  components: {
    BlogSummary,
    BlogHeroHeader,
  },
  async asyncData(context: Context) {
    const slug = context.params['slug'];
    const category = await context.$blog.category.get(slug);
    if (category) {
      const posts = await context.$blog.fetchByCategory(category.id, 0, 10);
      return {
        posts,
        category,
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
            disabled: false,
          },
          {
            text: `カテゴリ - ${category.name}`,
            to: category.to,
            exact: true,
            disabled: true,
          },
        ],
      };
    } else {
      context.error({ statusCode: 404, message: 'Not found.' });
    }
  },
  head() {
    return {
      title: `カテゴリ - ${this.category.name} - VTuberプロジェクト＊ひふみら`,
    };
  },
});
</script>
