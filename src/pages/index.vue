<template>
  <v-main>
    <top-hero />
    <v-container fluid class="py-0 overflow-hidden">
      <v-row>
        <v-col class="pa-0">
          <v-card tile flat class="text-center">
            <v-parallax
              class="black"
              height="400"
              :src="require('~/assets/images/top/mission.webp')"
            >
              <v-overlay absolute z-index="-1" :opacity="0.4" />
              <v-card-title
                class="justify-center accent--text text--lighten-2 front-weight-medium mission-anim"
              >
                <h2 class="text-h5 text-md-h3">
                  <span class="d-inline-block">リーフエイジの使命</span>
                  <span class="d-inline-block">- Our Mission -</span>
                </h2>
              </v-card-title>
              <v-card-text class="text-subtitle-1 text-md-h5 mission-anim">
                人々の記憶に残る、素敵な体験を世の中に届けたい。
              </v-card-text>
            </v-parallax>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        class="primary darken-3 pt-5"
        id="mission-anim-trigger"
      >
        <v-col cols="12" sm="10" md="8">
          <v-card class="pa-5">
            <v-row no-gutters align="center">
              <v-col>
                <v-card-title>
                  <h2 class="text-h6 text-md-h4">お知らせ</h2>
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
                    <nuxt-link
                      :to="`/press/${item.slug}`"
                      class="text-subtitle-2 text-md-h6"
                    >
                      {{ item.title }}
                    </nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        class="pt-5 primary darken-3"
        id="solution-anim-trigger"
      >
        <v-col class="solution-animation text-center">
          <v-icon
            color="info lighten-1"
            :size="mdAndUp ? 100 : 60"
            class="mt-5 mt-md-10 d-block"
          >
            emoji_objects
          </v-icon>
          <h2
            class="mb-5 mb-md-10 mx-auto info--text text--lighten-1 text-h5 text-md-h3 font-weight-bold"
          >
            <span class="d-inline-block">リーフエイジの</span
            ><span class="d-inline-block">ソリューション</span>
          </h2>
        </v-col>
      </v-row>
      <div class="primary darken-3 mx-n3" id="solution-anim1-trigger">
        <v-row
          no-gutters
          justify="center"
          class="secondary darken-4 solution-anim1"
        >
          <v-col cols="12" sm="10" lg="8" class="py-10 px-5">
            <v-card flat class="fill-height overflow-hidden">
              <v-row no-gutters>
                <v-col cols="12" md="4" lg="3" class="pa-0">
                  <v-img
                    :src="developmentImages.src600w"
                    :aspect-ratio="mdAndUp ? undefined : 2"
                    :height="mdAndUp ? '100%' : undefined"
                  />
                </v-col>
                <v-col class="pa-3">
                  <v-card-title>
                    <h3 class="text-h6 text-md-h4 solution-head px-2">
                      1. ランディングページ・Webサイト制作
                    </h3>
                  </v-card-title>
                  <v-card-text class="mx-0 mx-md-3">
                    <ul class="text-subtitle-2 text-md-h6">
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          集客に貢献する人目を引くサイトデザイン、使いやすい軽快なユーザビリティ
                        </span>
                      </li>
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          HeadlessCMS、JAMstack、SSR、AMP等、最先端のWeb技術をお手頃に
                        </span>
                      </li>
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          低コスト・高パフォーマンスな運用体制、きめ細やかな顧客サポート体制など、
                          <span class="d-inline-block">
                            アフターフォローも充実
                          </span>
                        </span>
                      </li>
                    </ul>
                    <p class="mt-5 text-caption text-md-body-1">
                      人目を引く・使いやすい・洗練されたデザインを重視してサイト制作します。<br />
                      LP制作はデザインからコーディング、運用まで多数の実績がございます。<br />
                      商材の独自の強みや差別化ポイントを抽出し、ユニークセリングプロポジションを作り出します。<br /><br />
                      自社ブランドを高めるコーポレートサイトやブランドサイトもお任せください。
                    </p>
                  </v-card-text>
                  <v-card-actions class="mb-5">
                    <v-spacer />
                    <v-btn
                      :class="{ 'text-caption': !mdAndUp }"
                      color="info"
                      href="https://studio-cleaf.com"
                      target="_blank"
                    >
                      ホームページ・LP制作なら<br
                        class="d-block d-md-none"
                      />STUDIO CLEAF
                      <v-icon right>play_arrow</v-icon>
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="secondary darken-4 mx-n3" id="solution-anim2-trigger">
        <v-row
          justify="center"
          no-gutters
          class="primary darken-3 solution-anim2"
        >
          <v-col cols="12" sm="10" lg="8" class="py-10 px-5">
            <v-card flat class="fill-height overflow-hidden">
              <v-row no-gutters>
                <v-col :order="mdAndUp ? 1 : 3" class="pa-3">
                  <v-card-title>
                    <h3 class="text-h6 text-md-h4 solution-head px-2">
                      2. SEO・リスティング代行
                    </h3>
                  </v-card-title>
                  <v-card-text class="mx-0 mx-md-3">
                    <ul class="text-subtitle-2 text-md-h6">
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          ハイクオリティなランディングページが1ページ無料
                        </span>
                      </li>
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          キーワード選定、広告文作成、LPOに自身。DSP広告も無料でバナー作成
                        </span>
                      </li>
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          きめ細やかなサポート体制で、様々なご要望にお答え
                        </span>
                      </li>
                    </ul>
                    <p class="mt-5 text-caption text-md-body-1">
                      LP制作とLPOの技術力に自身があります。<br />
                      広告運用手数料は相場より格安の10%<br />
                      商材の独自の強みや差別化ポイントを抽出し、ユニークセリングプロポジションを作り出します。<br /><br />
                      また、運用レポートを毎週提示致します。<br />
                      ダッシュボードでリアルタイムに成果が把握できます。<br />
                      きめ細やかなサポート体制で、お客様のリードジェネレーションに貢献いたします。
                    </p>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="4" lg="3" order="2" class="pa-0">
                  <v-img
                    :src="mentorImages.src600w"
                    :aspect-ratio="mdAndUp ? undefined : 2"
                    :height="mdAndUp ? '100%' : undefined"
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="primary darken-3 mx-n3" id="solution-anim3-trigger">
        <v-row
          no-gutters
          justify="center"
          class="secondary darken-4 solution-anim3"
        >
          <v-col cols="12" sm="10" lg="8" class="py-10 px-5">
            <v-card flat class="fill-height overflow-hidden">
              <v-row no-gutters>
                <v-col cols="12" md="4" lg="3" class="pa-0">
                  <v-img
                    :src="infraImages.src600w"
                    :aspect-ratio="mdAndUp ? undefined : 2"
                    :height="mdAndUp ? '100%' : undefined"
                  />
                </v-col>
                <v-col class="pa-3">
                  <v-card-title>
                    <h3 class="text-h6 text-md-h4 solution-head px-2">
                      3. システム開発
                    </h3>
                  </v-card-title>
                  <v-card-text class="mx-0 mx-md-3">
                    <ul class="text-subtitle-2 text-md-h6">
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          モダンでユーザのことをよく考えた、使いやすいUI/UX
                        </span>
                      </li>
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          クラウドインフラを活用した、高可用性、耐障害性、高セキュリティで
                          <span class="d-inline-block"
                            >優れたメンテナンス性</span
                          >
                        </span>
                      </li>
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          お客様の業務ドメインを深く分析し、業務フローに応じたチューニング、最適解を提供
                        </span>
                      </li>
                    </ul>
                    <p class="mt-5 text-caption text-md-body-1">
                      Nuxt.jsやServerless構成でのWebシステム開発は業界トップクラスの品質となります。<br />
                      お客様を巻き込み、チーム一丸となってプロジェクトを円滑に進めるスクラム型の開発手法により、小さく始め、お客様のレビューを最大限取り入れながら改善を繰り返し、システムを成長させます。<br />
                      長い目で見て、使われ続けるシステム、費用対効果にあったシステムの開発に尽力致します。<br />
                      お客様の業務ドメインをヒアリングの回数を重ねながら細かく把握し、業務フローを洗い出し、システム化することで、どれほどの業務改善が見込めるか分析致します。
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="secondary darken-4 mx-n3" id="solution-anim4-trigger">
        <v-row
          no-gutters
          justify="center"
          class="primary darken-3 solution-anim4"
        >
          <v-col cols="12" sm="10" lg="8" class="py-10 px-5">
            <v-card flat class="fill-height overflow-hidden">
              <v-row no-gutters>
                <v-col :order="mdAndUp ? 1 : 3" class="pa-3">
                  <v-card-title>
                    <h3 class="text-h6 text-md-h4 solution-head px-2">
                      4. DX(デジタルトランスフォーメーション)支援
                    </h3>
                  </v-card-title>
                  <v-card-text class="mx-0 mx-md-3">
                    <ul class="text-subtitle-2 text-md-h6">
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
                      <li>
                        <v-icon color="info">check_circle</v-icon>
                        <span>
                          各種SaaS連携、チューニングにより一気通貫の業務フロー実現
                        </span>
                      </li>
                    </ul>
                    <p class="mt-5 text-caption text-md-body-1">
                      弊社のシステム開発では、デジタルトランスフォーメーション(DX)を推進し、<br />
                      お客様のビジネスを加速させることを第一に考えております。<br />
                      テレワークにも最適なシステムを目指します。<br /><br />
                      クラウドサービスも取り入れつつ、RPAやChatbotなどを活用し、独自のシステムと掛け合わせ、<br />
                      お客様にあったシステムをご提供および導入のサポートを致します。
                    </p>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="4" lg="3" order="2" class="pa-0">
                  <v-img
                    :src="bpmImages.src600w"
                    :aspect-ratio="mdAndUp ? undefined : 2"
                    :height="mdAndUp ? '100%' : undefined"
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Back, Expo, Sine, TweenMax } from 'gsap';
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
    const tween1 = TweenMax.from('.mission-anim', 1.5, {
      opacity: 0,
      y: 50,
      ease: Sine.easeOut,
    });
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '#mission-anim-trigger',
        triggerHook: 'onEnter',
        reverse: false,
      })
      .setTween(tween1);
    const tween2 = TweenMax.from('.solution-animation', 1, {
      opacity: 0,
      y: 130,
      ease: Back.easeOut,
    });
    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '#solution-anim-trigger',
        triggerHook: 'onEnter',
        reverse: false,
        offset: 300,
      })
      .setTween(tween2);
    this.$scrollmagic.addScene(scene1);
    this.$scrollmagic.addScene(scene2);
    const solutions = [
      { no: 1, target: '#solution-anim1-trigger', from: 'left' },
      { no: 2, target: '#solution-anim2-trigger', from: 'right' },
      { no: 3, target: '#solution-anim3-trigger', from: 'left' },
      { no: 4, target: '#solution-anim4-trigger', from: 'right' },
    ];
    solutions.forEach(({ no, target, from }) => {
      const tween1 = TweenMax.from(`.solution-anim${no}`, 1.5, {
        xPercent: from === 'left' ? -200 : 200,
        ease: Expo.easeOut,
      });
      const scene = this.$scrollmagic
        .scene({
          triggerElement: target,
          triggerHook: 'onEnter',
          reverse: false,
          offset: 300,
        })
        .setTween(tween1);
      this.$scrollmagic.addScene(scene);
    });
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
  margin-left: -30px;
  font-size: 24px;
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    margin-left: -22px;
    font-size: 20px;
  }
}
.solution-head {
  width: 100%;
  font-weight: bold;
  color: map-get($blue-grey, darken-2);
  border-bottom: medium solid map-get($blue-grey, darken-2);
}
</style>
