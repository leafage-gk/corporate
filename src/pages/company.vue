<template>
  <v-main>
    <page-container :items="items">
      <v-col cols="12">
        <v-row justify="center" align="center">
          <v-subheader><h2>会社概要</h2></v-subheader>
        </v-row>
        <v-row justify="center" align="center" v-if="info">
          <table class="overview">
            <tbody>
              <tr v-for="(item, index) in info.overview" :key="index">
                <th>{{ item.title }}</th>
                <td v-html="item.content" />
              </tr>
            </tbody>
          </table>
        </v-row>
      </v-col>
    </page-container>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue';

import { CompanyInfo } from '~/domains/company';

export default Vue.extend({
  components: {
    PageContainer: () => import('~/components/molecules/PageContainer.vue'),
  },
  async asyncData(ctx) {
    const info = await ctx.$company.fetch(
      ctx.query['draftKey'] as string | undefined,
    );
    return {
      info,
    };
  },
  data() {
    return {
      items: [
        {
          text: 'TOP',
          to: '/',
        },
        {
          text: '会社概要',
          to: '/company',
        },
      ],
      info: null as CompanyInfo | null,
    };
  },
  head: {
    title: '会社概要',
    link: [
      {
        rel: 'canonical',
        href: 'https://leafage.co.jp/company',
        id: 'canonical',
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
table.overview {
  margin: 10px;
  color: map-get($grey, darken-3);
  border-collapse: collapse;
  > tbody > tr {
    border-bottom: 1px solid map-get($grey, lighten-2);
    > th,
    > td {
      padding: 10px;
    }
    > th {
      color: map-get($cyan, base);
      text-align: right;
    }
  }
}
</style>
