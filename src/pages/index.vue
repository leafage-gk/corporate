<template>
  <v-main>
    <top-hero />
    <v-container fluid>
      <v-row>
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-card tile :elevation="hover ? 10 : 2" class="text-center">
              <v-parallax
                :class="{ 'on-hover': hover }"
                :height="mdAndUp ? 300 : 200"
                :src="require('~/assets/images/top/mission.webp')"
              >
                <v-overlay absolute z-index="-1" :opacity="hover ? 0.2 : 0.4" />
                <v-card-title
                  :class="{
                    'justify-center': true,
                    title: mdAndUp,
                    'subtitle-1': !mdAndUp,
                    'accent--text': true,
                    'text--lighten-2': true,
                    'font-weight-medium': true,
                  }"
                >
                  リーフエイジの使命 - Our Mission -
                </v-card-title>
                <v-card-text
                  :class="{
                    headline: mdAndUp,
                    title: !mdAndUp,
                    'white--text': true,
                  }"
                >
                  人々の記憶に残る、素敵な体験を世の中に届けたい。
                </v-card-text>
              </v-parallax>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6" xl="4">
          <v-card class="pa-5">
            <v-row no-gutters align="center">
              <v-col>
                <v-card-title>
                  <h2 class="headline">お知らせ</h2>
                </v-card-title>
              </v-col>
              <v-col class="text-right">
                <v-btn text color="primary" to="/news">
                  <v-icon left>list</v-icon>
                  一覧へ
                </v-btn>
              </v-col>
            </v-row>
            <v-list>
              <v-list-item v-for="(item, index) in news" :key="index">
                <v-list-item-content>
                  <v-list-item-subtitle>
                    {{ $moment(item.publishedAt).format('YYYY年MM月DD日') }}
                  </v-list-item-subtitle>
                  <v-list-item-title>
                    <nuxt-link :to="`/press/${item.slug}`">
                      {{ item.title }}
                    </nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="10" lg="8" xl="6">
          <v-row justify="center" class="mt-5">
            <v-icon color="info" :size="50">emoji_objects</v-icon>
          </v-row>
          <v-row justify="center" class="mb-5">
            <v-subheader
              :class="{
                headline: mdAndUp,
                'subtitle-2': !mdAndUp,
                'info--text': true,
              }"
            >
              <h2>リーフエイジのソリューション</h2>
            </v-subheader>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-img
                :src="developmentImages.src600w"
                :aspect-ratio="mdAndUp ? 1 : 2"
              />
            </v-col>
            <v-col>
              <v-card tile flat>
                <v-card-title
                  :class="{
                    headline: mdAndUp,
                    title: !mdAndUp,
                    'font-weight-medium': true,
                  }"
                >
                  Webサービス、モバイルアプリの受託開発
                </v-card-title>
                <v-card-text :class="mdAndUp ? 'title' : 'subtitle-1'">
                  <ul>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>他社と比べて低コストでの開発が可能</span>
                    </li>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>
                        要件の見極めを両社間で深く洞察していき、ユーザーに使われる製品を生み出す
                      </span>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col :order="mdAndUp ? 1 : 3">
              <v-card tile flat>
                <v-card-title
                  :class="{
                    headline: mdAndUp,
                    title: !mdAndUp,
                    'font-weight-medium': true,
                  }"
                >
                  開発メンター
                </v-card-title>
                <v-card-text :class="mdAndUp ? 'title' : 'subtitle-1'">
                  <ul>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>
                        環境構築支援、技術選定支援、DevOps導入支援、技術メンター等、開発の効率化アップに寄与
                      </span>
                    </li>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>
                        スクラム開発のノウハウを生かし、チームのパフォーマンスの最大化を図る
                      </span>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" order="2">
              <v-img
                :src="mentorImages.src600w"
                :aspect-ratio="mdAndUp ? 1 : 2"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-img
                :src="infraImages.src600w"
                :aspect-ratio="mdAndUp ? 1 : 2"
              />
            </v-col>
            <v-col>
              <v-card tile flat>
                <v-card-title
                  :class="{
                    headline: mdAndUp,
                    title: !mdAndUp,
                    'font-weight-medium': true,
                  }"
                >
                  バックエンドインフラの構築
                </v-card-title>
                <v-card-text :class="mdAndUp ? 'title' : 'subtitle-1'">
                  <ul>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>
                        クラウドインフラを導入することによる低コストなバックエンドインフラの構築
                      </span>
                    </li>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>
                        高可用性、耐障害性、高セキュリティで優れたメンテナンス性を担保していく
                      </span>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col :order="mdAndUp ? 1 : 3">
              <v-card tile flat>
                <v-card-title
                  :class="{
                    headline: mdAndUp,
                    title: !mdAndUp,
                    'font-weight-medium': true,
                  }"
                >
                  BPMを提案から導入、運用までをフルサポート
                </v-card-title>
                <v-card-text :class="mdAndUp ? 'title' : 'subtitle-1'">
                  <ul>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>
                        効果を測定し、改善していくことで、業務プロセスのパフォーマンスを向上
                      </span>
                    </li>
                    <li>
                      <v-icon color="info">check_circle</v-icon>
                      <span>
                        業界動向の変化に合わせてシステムの調整を行い、事業継続性の向上につなげる
                      </span>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" order="2">
              <v-img :src="bpmImages.src600w" :aspect-ratio="mdAndUp ? 1 : 2" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue';

import { NewsPost } from '~/domains/press';
import bpmImages from '~/hooks/images/solutions/bpm';
import developmentImages from '~/hooks/images/solutions/development';
import infraImages from '~/hooks/images/solutions/infra';
import mentorImages from '~/hooks/images/solutions/mentor';

export default Vue.extend({
  components: {
    TopHero: () => import('~/components/molecules/TopArticle/TopHero.vue'),
  },
  head: {
    title: 'IT x Creativity',
    link: [
      {
        rel: 'canonical',
        href: 'https://leafage.co.jp',
        id: 'canonical',
      },
    ],
    meta: [
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'IT x Creativity',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'IT x Creativity',
      },
    ],
  },
  data() {
    return {
      isMounted: false,
      news: [] as NewsPost[],
      bpmImages,
      developmentImages,
      infraImages,
      mentorImages,
    };
  },
  async asyncData(context) {
    const posts = await context.$press.fetchNews();
    return {
      news: posts.contents,
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
  layout: 'top',
});
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
}
.v-icon {
  margin-left: -24px;
  font-size: 24px;
}
</style>
