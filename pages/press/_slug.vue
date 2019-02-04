<template>
  <v-content>
    <v-img
      :src="
        press.headerImage
          ? press.headerImage
          : require('~/assets/images/press_header.jpg')
      "
      height="200"
    >
      <v-layout pa-2 column fill-height class="lightbox white--text">
        <v-spacer />
        <v-flex shrink>
          <div class="mysubheading">
            {{ press.title }}
          </div>
        </v-flex>
      </v-layout>
    </v-img>
    <v-container>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      <div class="grey--text">
        {{ press.publishedAt | dateFormat('YYYY年MM月DD日') }}
      </div>
      <div class="press-body" v-html="$md.render(press.body)"></div>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/vue-app-edge';
import { PressPost } from '~/domains/contentful';

interface Data {
  press: PressPost;
  items: {
    text: string;
    href: string;
    disabled: boolean;
  }[];
}

// 型パラメータ指定しないとnuxtの型定義がうまく型推論されない…
export default Vue.extend<Data, {}, {}, never>({
  async asyncData(context: Context) {
    if (context.payload) {
      return { press: context.payload as PressPost };
    }
    const slug = context.params['slug'];
    const press = await context.$press.get(slug);
    return {
      press,
      items: [
        {
          text: 'TOP',
          href: '/',
          disabled: false,
        },
        {
          text: 'プレスリリース一覧',
          href: '/press',
          disabled: false,
        },
        {
          text: press.title,
          href: `/press/${press.slug}`,
          disabled: true,
        },
      ],
    };
  },
  head() {
    return {
      title: this.press.title,
    };
  },
});
</script>

<style lang="stylus" scoped>
.mysubheading {
  font-size: 24px;
  font-weight: bold;
}
.lightbox {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 60px);
}
</style>
