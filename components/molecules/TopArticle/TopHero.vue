<template>
  <v-carousel
    height="auto"
    continuous
    cycle
    :hide-delimiters="!mdAndUp"
    show-arrows-on-hover
  >
    <v-carousel-item>
      <hero-image :srcs="heroImages.hero">
        <v-container height="100%" class="white--text">
          <v-row>
            <v-col align="center" justify="center">
              <h1
                :class="{
                  'mb-2': true,
                  'display-4': mdAndUp,
                  'display-1': !mdAndUp,
                  'font-weight-medium': true,
                }"
              >
                IT ✖ Creativity
              </h1>
              <p
                :class="{
                  headline: mdAndUp,
                  'subtitle-1': !mdAndUp,
                }"
              >
                素敵な体験を次世代に。
              </p>
            </v-col>
          </v-row>
        </v-container>
      </hero-image>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="red--text text--lighten-2"
        title="受託開発"
        icon="color_lens"
        _to="/business/development"
        :srcs="heroImages.development"
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
        _to="/business/mentor"
        :srcs="heroImages.mentor"
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
        _to="/business/support-infra"
        :srcs="heroImages.infra"
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
        _to="/business/bpm"
        :srcs="heroImages.bpm"
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

import hero from '~/hooks/images/hero';
import bpm from '~/hooks/images/solutions/bpm';
import development from '~/hooks/images/solutions/development';
import infra from '~/hooks/images/solutions/infra';
import mentor from '~/hooks/images/solutions/mentor';

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
      heroImages: {
        hero,
        bpm,
        development,
        infra,
        mentor,
      },
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
