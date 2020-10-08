<template>
  <v-main class="grey lighten-4">
    <responsive-image align="end" :height="300" :srcs="pageHeader" />
    <press-container :items="items" :press="press" />
  </v-main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue';

import PressHeader from '~/assets/images/page_header@1280w.webp';
import ResponsiveImage from '~/components/atoms/ResponsiveImage.vue';
import PressContainer from '~/components/organisms/PressContainer.vue';
import { PressPost } from '~/domains/press';
import pageHeader from '~/hooks/images/press_header';

export default Vue.extend({
  components: {
    ResponsiveImage,
    PressContainer,
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
      pageHeader,
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    mdAndUp(): boolean {
      return this.isMounted ? this.$vuetify.breakpoint.mdAndUp : true;
    },
  },
  async asyncData(context: Context) {
    const press = await context.$press.getById(
      context.params['id'],
      context.query['draftKey'] as string | undefined,
    );
    if (press) {
      return {
        press,
        items: [
          {
            text: 'TOP',
            to: '/',
          },
          {
            text: '最新情報一覧',
            to: '/news',
            // text:
            //   press.type.id === '2u9ctzqlxi' ? 'ニュース一覧' : 'ブログ一覧',
            // to: press.type.id === '2u9ctzqlxi' ? '/news' : '/blog',
            exact: true,
          },
          {
            text: press.title,
            to: {
              path: `/preview/press/${press.id}`,
              query: {
                draftKey: context.query['draftKey'],
              },
            },
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
