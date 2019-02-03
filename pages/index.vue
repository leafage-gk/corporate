<template>
  <v-content>
    <v-parallax :src="require('~/assets/images/hero.jpg')">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="shadow-text mb-2 text-xs-center">
          Webをもっと自由に美しく
        </h1>
        <div class="hero-subtext shadow-text mb-3 text-xs-center">
          TypeScriptで紡ぐ次世代のWeb制作会社、リーフエイジ合同会社
        </div>
      </v-layout>
    </v-parallax>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center pa-3">
            <h2 class="myheadline">
              最先端、短納期、高品質のWebサイト、アプリを低価格で実現します。
            </h2>
            <p class="mysubheadline">
              FaaSやHeadless CMS導入でランニングコストも最小限に抑えられます。
            </p>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="red--text text--lighten-2">
                      color_lens
                    </v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Web受託開発
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Webサイト、モバイルサイト、スマートフォン向けネイティブアプリ開発の請負、
                    TypeScript、Nuxt.js、Expo、ReactNative、Firebase、AWS、SSR、Contentful、
                    Web開発のプロフェッショナルにお任せください。
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-blue--text text--lighten-2">
                      group
                    </v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">開発コンサルティング</div>
                  </v-card-title>
                  <v-card-text>
                    自社開発でお困りのことがあれば、経験豊富な弊社スタッフにお任せください。
                    環境構築支援、技術選定支援、DevOps導入支援、技術メンターとして
                    ソースコードレビューから技術的負債へのアプローチまで幅広く対応できます。
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="amber--text text--lighten-2">
                      build
                    </v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
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
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="require('~/assets/images/section.jpg')">
        <v-layout column align-center justify-center>
          <div class="shadow-text headline white--text mb-3 text-xs-center">
            お問い合わせ、お見積もりはお気軽にご相談下さい。
          </div>
          <v-btn class="secondary lighten-2 mt-5" dark large to="/contact">
            お問合せ
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'TOP',
    };
  },
});
</script>

<style lang="stylus" scoped>
.shadow-text {
  text-shadow: 0px 0px 8px #004D40;
}

.hero-subtext {
  font-size: 20px !important;
  font-weight: 400;
  line-height: 32px !important;
  letter-spacing: normal !important;
}

.myheadline {
  font-size: 24px;
}

.mysubheadline {
  font-size: 20px;
}
</style>
