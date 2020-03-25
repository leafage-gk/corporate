<template>
  <v-content>
    <v-img :src="press.headerImage || defaultPressHeader" height="200">
      <v-layout pa-2 column fill-height class="lightbox white--text">
        <v-spacer />
        <v-flex shrink>
          <div class="mysubheading">
            {{ press.title }}
          </div>
        </v-flex>
      </v-layout>
    </v-img>
    <page-container :items="items">
      <v-container fluid class="ma-4">
        <v-row class="grey--text pa-2">
          {{ press.publishedAt | dateFormat('YYYY年MM月DD日') }}
        </v-row>
        <v-row>
          <div class="pa-2" v-html="$md.render(press.body || '')" />
        </v-row>
      </v-container>
    </page-container>
  </v-content>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue';

import PressHeader from '~/assets/images/page_header.jpg';
import PageContainer from '~/components/molecules/PageContainer.vue';
import { PressPost } from '~/domains/contentful';

export default Vue.extend({
  components: {
    PageContainer,
  },
  data() {
    return {
      defaultPressHeader: PressHeader,
      press: {} as PressPost,
      items: [] as {
        text: string;
        to: string;
        disabled: boolean;
      }[],
    };
  },
  async asyncData(context: Context) {
    const slug = context.params['slug'];
    const press = context.payload
      ? (context.payload as PressPost)
      : await context.$press.get(slug);
    if (press) {
      return {
        press,
        items: [
          {
            text: 'TOP',
            to: '/',
          },
          {
            text: 'ニュース一覧',
            to: '/press',
            exact: true,
          },
          {
            text: press.title,
            to: `/press/${press.slug}`,
          },
        ],
      };
    } else {
      context.error({ statusCode: 404, message: 'Not found.' });
    }
  },
  head() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      title: (this as any).press.title,
    };
  },
  layout: 'top',
});
</script>

<style lang="scss" scoped>
.mysubheading {
  font-size: 24px;
  font-weight: bold;
}
.lightbox {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.3) 0%,
    transparent 60px
  );
}
</style>
