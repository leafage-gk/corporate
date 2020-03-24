<template>
  <v-carousel
    height="auto"
    continuous
    cycle
    :hide-delimiters="!mdAndUp"
    show-arrows-on-hover
  >
    <v-carousel-item>
      <hero-image :src="require('~/assets/images/hero.jpg')">
        <v-container height="100%" class="white--text">
          <v-row>
            <v-col align="center" justify="center">
              <h1
                :class="{
                  'mb-2': true,
                  'display-2': mdAndUp,
                  headline: !mdAndUp,
                }"
              >
                ITをもっと自由に美しく
              </h1>
              <p
                :class="{
                  title: mdAndUp,
                  'subtitle-2': !mdAndUp,
                }"
              >
                次世代の制作会社、リーフエイジ合同会社
              </p>
            </v-col>
          </v-row>
        </v-container>
      </hero-image>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="info--text text--lighten-2"
        title="短納期・高品質・低価格"
        icon="eco"
        :src="require('~/assets/images/footer.jpg')"
      >
        <p :class="carouselText">
          各種最先端の開発ツールを導入して短納期・高品質・低価格を実現
        </p>
        <p :class="carouselText">
          クラウドインフラ導入でランニングコストも最小限に
        </p>
      </hero-carousel-item>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="red--text text--lighten-2"
        title="受託開発"
        icon="color_lens"
        to="/business/development"
        :src="require('~/assets/images/solutions/development.jpg')"
      >
        <p :class="carouselText">
          Webサイト制作＆アプリ開発ならお任せください
        </p>
        <p :class="carouselText">
          Vue.js、Nuxt.js、ReactNative、Flatter、Unity
        </p>
      </hero-carousel-item>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="light-blue--text text--lighten-2"
        title="開発メンター"
        icon="group"
        to="/business/mentor"
        :src="require('~/assets/images/solutions/mentor.jpg')"
      >
        <p :class="carouselText">
          環境構築支援、技術選定支援、DevOps導入支援、技術メンター
        </p>
        <p :class="carouselText">
          自社開発でお困りのことがあれば、経験豊富な弊社スタッフにお任せください
        </p>
      </hero-carousel-item>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="amber--text text--lighten-2"
        title="バックエンドインフラ構築"
        icon="build"
        to="/business/support-infra"
        :src="require('~/assets/images/solutions/infra.jpg')"
      >
        <p :class="carouselText">
          高可用性、耐障害性、高セキュリティ、優れたメンテナンス性
        </p>
        <p :class="carouselText">
          AWS、Firebase上で、ハイパフォーマンスなシステムを構築します
        </p>
      </hero-carousel-item>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="teal--text text--lighten-2"
        title="業務改善"
        icon="loop"
        to="/business/bpm"
        :src="require('~/assets/images/solutions/bpm.jpg')"
      >
        <p :class="carouselText">
          BPMを提案から導入、運用までをフルサポート
        </p>
        <p :class="carouselText">
          効果を測定し、改善していくことで、業務プロセスのパフォーマンスを向上させます
        </p>
      </hero-carousel-item>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue';

import HeroCarouselItem from './HeroCarouselItem.vue';
import HeroImage from './HeroImage.vue';

export default Vue.extend({
  components: {
    HeroCarouselItem,
    HeroImage,
  },
  data() {
    return {
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
    carouselText(): Record<string, boolean> {
      return {
        title: this.mdAndUp,
        'subtitle-2': !this.mdAndUp,
        'ma-0': true,
      };
    },
  },
});
</script>
