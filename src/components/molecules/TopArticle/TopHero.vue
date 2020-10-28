<template>
  <div class="top-hero">
    <v-carousel
      height="100%"
      :cycle="cycle"
      dark
      continuous
      show-arrows-on-hover
    >
      <v-carousel-item>
        <hero-image :srcs="heroImages.hero">
          <div class="overlay" />
          <v-container height="100%" class="white--text">
            <v-row>
              <v-col align="center" justify="center">
                <h1
                  class="text-h4 text-md-h1 mb-2 top-hero-splitting catchcopy"
                >
                  IT × Creativity
                </h1>
                <p
                  class="text-subtitle-1 text-md-h5 top-hero-splitting subtitle"
                >
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
  </div>
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
      cycle: false,
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
    Splitting({
      target: '.top-hero-splitting',
      by: 'chars',
    });
    setTimeout(() => {
      this.cycle = true;
    }, 2000);
  },
});
</script>

<style lang="scss">
.top-hero {
  height: 500px;
  @media #{map-get($display-breakpoints, 'md-and-up')} {
    height: 7 / 16 * 100vw;
  }

  @keyframes appear-subtitle {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes slidein-subtitle {
    0% {
      opacity: 1;
      transform: translateX(10%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes appear-catchcopy {
    0% {
      margin-bottom: 0;
      font-size: 8rem;
      opacity: 0;
    }

    50% {
      margin-bottom: 10px;
      font-size: 9rem;
      opacity: 0.5;
    }

    100% {
      margin-bottom: 0;
      font-size: 8rem;
      opacity: 1;
    }
  }

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    @keyframes appear-catchcopy {
      0% {
        margin-bottom: 0;
        font-size: 2.125rem;
        opacity: 0;
      }

      50% {
        margin-bottom: 10px;
        font-size: 2.5rem;
        opacity: 0.5;
      }

      100% {
        margin-bottom: 0;
        font-size: 2.125rem;
        opacity: 1;
      }
    }
  }

  @keyframes slidein-catchcopy {
    0% {
      opacity: 1;
      transform: translateX(-100%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .catchcopy {
    display: inline-flex;
    align-items: flex-end;
    justify-content: center;
    height: 106px;
    font-family: 'Oxanium', sans-serif !important;
    opacity: 0;
    animation: 2.8s slidein-catchcopy;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 50px;
    }

    .whitespace {
      width: 12px;
    }

    .char {
      margin-bottom: 0;
      font-size: 8rem;
      line-height: 96px;
      vertical-align: bottom;
      opacity: 0;
      transition: all 0.5s calc(0.5s + var(--char-index) * 0.1s);
      animation: 0.5s appear-catchcopy;
      animation-fill-mode: forwards;
      animation-delay: calc(0.5s + var(--char-index) * 0.1s);
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        font-size: 2.125rem;
        line-height: 40px;
      }
    }
  }

  .subtitle {
    opacity: 0;
    animation: 2.8s slidein-subtitle;
    animation-fill-mode: forwards;
    animation-delay: 3s;

    .char {
      opacity: 0;
      transition: all 3s calc(4s - var(--char-index) * 0.1s);
      animation: 0.5s appear-subtitle;
      animation-fill-mode: forwards;
      animation-delay: calc(4s - var(--char-index) * 0.1s);
    }
  }

  @keyframes overlay {
    0% {
      opacity: 0.6;
    }

    100% {
      opacity: 0;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
    animation: 3s overlay;
    animation-fill-mode: forwards;
  }
}
</style>
