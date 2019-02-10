<template>
  <v-content>
    <blog-hero-header :image="blog.headerImage" :subtitle="blog.title" />
    <v-container class="m-plus-rounded-1c">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      <v-flex xs12 md12>
        <v-layout pa-2 row align-center wrap>
          <v-flex xs4 md4>
            <nuxt-link :to="blog.author.to" class="author-link">
              <v-avatar size="48px">
                <img :src="blog.author.icon" :alt="blog.author.slug" />
              </v-avatar>
              <span class="grey--text">{{ blog.author.name }}</span>
            </nuxt-link>
          </v-flex>
          <v-flex xs6 md3 class="grey--text">
            公開日時
            {{ blog.publishedAt | dateFormat('YYYY年MM月DD日') }}
          </v-flex>
          <v-flex xs12 md5>
            <span class="grey--text">カテゴリ</span>
            <v-btn
              v-bind:key="category.id"
              v-for="category in blog.categories"
              :to="category.to"
              small
              round
              depressed
            >
              {{ category.name }}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <div class="blog-body" v-html="$md.render(blog.body)"></div>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/vue-app-edge';
import BlogHeroHeader from '~/components/BlogHeroHeader.vue';
import { BlogPost } from '~/domains/contentful';

interface Data {
  blog: BlogPost;
  items: {
    text: string;
    to: string;
    disabled: boolean;
  }[];
}

// 型パラメータ指定しないとnuxtの型定義がうまく型推論されない…
export default Vue.extend<Data, {}, {}, never>({
  components: {
    BlogHeroHeader,
  },
  async asyncData(context: Context) {
    const slug = context.params['slug'];
    const blog = context.payload
      ? (context.payload as BlogPost)
      : await context.$blog.get(slug);
    if (blog) {
      return {
        blog,
        items: [
          {
            text: 'TOP',
            to: '/projects/hifumira',
            exact: true,
          },
          {
            text: '新着ブログ一覧',
            to: '/projects/hifumira/blog',
            exact: true,
          },
          {
            text: blog.title,
            to: `/projects/hifumira/blog/posts/${blog.slug}`,
          },
        ],
      };
    } else {
      context.error({ statusCode: 404, message: 'Not found.' });
    }
  },
  head() {
    return {
      title: `${this.blog.title} - VTuberプロジェクト＊ひふみら`,
    };
  },
});
</script>

<style lang="stylus" scoped>
.author-link {
  text-decoration: none;
  outline: 0;
}
</style>
