<template>
  <v-content>
    <top-hero />
    <v-container fluid class="ma-0 pa-0 grey--text text--darken-3">
      <v-row>
        <v-col justify="center" align="center" cols="12" md="4">
          <v-card flat>
            <v-card-text>
              <v-icon x-large class="red--text text--lighten-2">
                color_lens
              </v-icon>
            </v-card-text>
            <v-card-title class="justify-center">
              <div class="headline">
                Web受託開発
              </div>
            </v-card-title>
            <v-card-text>
              Webサイト、モバイルサイト、スマートフォン向けネイティブアプリ開発の請負、
              TypeScript、Nuxt.js、Expo、ReactNative、Firebase、AWS、SSR、Contentful、
              Web開発のプロフェッショナルにお任せください。
            </v-card-text>
          </v-card>
        </v-col>
        <v-col justify="center" align="center" cols="12" md="4">
          <v-card flat>
            <v-card-text>
              <v-icon x-large class="light-blue--text text--lighten-2">
                group
              </v-icon>
            </v-card-text>
            <v-card-title class="justify-center">
              <div class="headline">開発コンサルティング</div>
            </v-card-title>
            <v-card-text>
              自社開発でお困りのことがあれば、経験豊富な弊社スタッフにお任せください。
              環境構築支援、技術選定支援、DevOps導入支援、技術メンターとして
              ソースコードレビューから技術的負債へのアプローチまで幅広く対応できます。
            </v-card-text>
          </v-card>
        </v-col>
        <v-col justify="center" align="center" cols="12" md="4">
          <v-card flat>
            <v-card-text>
              <v-icon x-large class="amber--text text--lighten-2">
                build
              </v-icon>
            </v-card-text>
            <v-card-title class="justify-center">
              <div class="headline">
                システム構築
              </div>
            </v-card-title>
            <v-card-text>
              高可用性、耐障害性、高セキュリティで更に優れたメンテナンス性を
              併せ持つシステムを低コストで実現しませんか。
              AWS、Firebase上で完結し、運用の手間も抑えられます。
              お客様との二人三脚でハイパフォーマンスなシステムを構築します。
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

import { TopHero } from '~/components/molecules/TopArticle';

export default Vue.extend({
  components: {
    TopHero,
  },
  head: {
    title: '最先端のサイト制作のプロ',
  },
});
</script>
