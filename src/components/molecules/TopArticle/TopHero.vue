<template>
  <v-carousel height="auto" continuous cycle show-arrows-on-hover>
    <v-carousel-item>
      <hero-image :srcs="heroImages.hero">
        <v-container height="100%" class="white--text">
          <v-row>
            <v-col align="center" justify="center">
              <h1 class="text-h4 text-md-h1 mb-2">
                IT ✖ Creativity
              </h1>
              <p class="text-subtitle-1 text-md-h5">
                素敵な体験を次世代に
              </p>
            </v-col>
          </v-row>
        </v-container>
      </hero-image>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="red--text text--lighten-2"
        title="LP・Webサイト制作"
        icon="color_lens"
        _to="/business/development"
        :srcs="heroImages.development"
      >
        <p class="text-subtitle-2 text-md-h6 ma-0">
          人目を引く・使いやすい・洗練されたデザインのWebサイト制作はお任せください
        </p>
        <p class="text-subtitle-2 text-md-h6 ma-0">
          Vue.js、Nuxt.js、HeadlessCMS、JAMstack、SSR、AMP、Serverless
        </p>
      </hero-carousel-item>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="light-blue--text text--lighten-2"
        title="SEO・リスティング代行"
        icon="campaign"
        _to="/business/mentor"
        :srcs="heroImages.mentor"
      >
        <p class="text-subtitle-2 text-md-h6 ma-0">
          コストパフォーマンスのよいキーワード選定と人目につく広告文でCPA改善します
        </p>
        <p class="text-subtitle-2 text-md-h6 ma-0">
          A/Bテスト、ヒートマップ解析を継続的に行い、CVRを向上させます
        </p>
      </hero-carousel-item>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="amber--text text--lighten-2"
        title="システム開発"
        icon="build"
        _to="/business/support-infra"
        :srcs="heroImages.infra"
      >
        <p class="text-subtitle-2 text-md-h6 ma-0">
          高可用性、耐障害性、高セキュリティ、優れたメンテナンス性
        </p>
        <p class="text-subtitle-2 text-md-h6 ma-0">
          AWS、Firebase上で、ハイパフォーマンスなシステムを構築します
        </p>
      </hero-carousel-item>
    </v-carousel-item>
    <v-carousel-item>
      <hero-carousel-item
        color="teal--text text--lighten-2"
        title="業務改善・DX支援"
        icon="cloud"
        _to="/business/bpm"
        :srcs="heroImages.bpm"
      >
        <p class="text-subtitle-2 text-md-h6 ma-0">
          BPMを提案から導入、運用までをフルサポート
        </p>
        <p class="text-subtitle-2 text-md-h6 ma-0">
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
      heroImages: {
        hero,
        bpm,
        development,
        infra,
        mentor,
      },
    };
  },
});
</script>
