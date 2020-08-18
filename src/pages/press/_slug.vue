<template>
  <v-main>
    <v-img
      :src="imageSrc"
      :srcset="imageSrcset"
      height="300"
      gradient="to top, rgba(0, 0, 0, 0.6) 0%, transparent 70%"
    >
      <v-row align="end" class="fill-height px-4">
        <v-col>
          <h1 class="white--text subheading">
            {{ press.title }}
          </h1>
        </v-col>
      </v-row>
    </v-img>
    <page-container :items="items">
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-chip class="mx-2" color="primary" label>
              {{ press.type.title }}
            </v-chip>
            <span class="grey--text">
              {{ $moment(press.publishedAt).format('YYYY年MM月DD日') }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="body-theme">
            <template v-for="(item, index) in press.body">
              <div
                v-if="item.fieldId === 'richEditor'"
                v-html="item.richEditor"
                :key="index"
              />
              <div v-else v-html="item.html" :key="index" />
            </template>
          </v-col>
        </v-row>
        <v-row v-if="press.relatedArticles.length > 0">
          <v-col cols="12">
            <v-divider />
          </v-col>
          <v-col cols="12">
            <h2 class="subheading">
              関連記事
            </h2>
          </v-col>
          <v-col
            v-for="(related, index) in press.relatedArticles"
            :key="index"
            cols="12"
            sm="6"
            md="5"
            lg="4"
            xl="3"
          >
            <press-relation :press="related" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-divider />
          </v-col>
          <v-col v-if="press.prev" cols="12" sm="6" md="5" lg="4" xl="3">
            <press-relation :press="press.prev" title="前の記事" />
          </v-col>
          <v-col v-if="press.next" cols="12" sm="6" md="5" lg="4" xl="3">
            <press-relation :press="press.next" title="次の記事" />
          </v-col>
        </v-row>
      </v-col>
    </page-container>
  </v-main>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from '@nuxt/types';
import Vue from 'vue';

import PressHeader from '~/assets/images/page_header@1280w.webp';
import { PressPost } from '~/domains/press';

export default Vue.extend({
  components: {
    PageContainer: () => import('~/components/molecules/PageContainer.vue'),
    PressRelation: () => import('~/components/molecules/PressRelation.vue'),
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
  computed: {
    imageSrc(): string {
      return this.press && this.press.thumbnail
        ? this.press.thumbnail.url + '?h=300&w=1200&fit=crop&dpr=1'
        : PressHeader;
    },
    imageSrcset(): string {
      if (this.press && this.press.thumbnail) {
        return [
          this.press.thumbnail.url + '?h=300&w=1200&fit=crop&dpr=1 1x',
          this.press.thumbnail.url + '?h=300&w=1200&fit=crop&dpr=2 2x',
        ].join(',');
      } else {
        return PressHeader;
      }
    },
  },
  async asyncData(context: Context) {
    const press = await context.$press.getBySlug(context.params['slug']);
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
            to: '/news',
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
      title: (this as any).press.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://leafage.co.jp/press/' + (this as any).press.slug,
          id: 'canonical',
        },
      ],
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://leafage.co.jp/press/' + (this as any).press.slug,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: (this as any).press.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: (this as any).press.summary,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: (this as any).press.thumbnail.url,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: (this as any).press.summary,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: (this as any).press.title,
        },
      ],
    };
  },
  layout: 'top',
});
</script>
