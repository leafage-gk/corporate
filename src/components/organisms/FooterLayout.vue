<template>
  <v-footer padless id="footer">
    <v-card flat tile width="100%" class="white--text text-center">
      <responsive-image
        :height="300"
        gradient="to top, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        align="center"
        :srcs="footer"
      >
        <v-card-text>
          <p class="ma-0 white--text text-subtitle-2 text-md-subtitle-1">
            <span class="d-inline-block">LP・Webサイト制作、</span>
            <span class="d-inline-block">リスティング代行、</span>
            <span class="d-inline-block">システム開発など</span>
            <br class="d-none d-md-block" />
            <span class="d-inline-block">Webに関することなら当社へ</span>
            <span class="d-inline-block">お気軽にご相談ください</span>
          </p>
        </v-card-text>
        <v-btn
          :x-large="mdAndUp"
          class="ma-6 text-subtitle-1 text-md-h6"
          color="accent darken-1"
          to="/contact"
        >
          無料相談・お問合わせはこちら
          <v-icon right>play_arrow</v-icon>
        </v-btn>
      </responsive-image>
      <v-card-text class="secondary darken-4 white--text">
        <p class="ma-0">
          <span class="d-inline-block">
            &copy; {{ new Date().getFullYear() }} {{ company }}
            All Rights Reserved.
          </span>
          <span class="mx-2">|</span>
          <nuxt-link to="/privacy" class="white--text d-inline-block">
            プライバシーポリシー
          </nuxt-link>
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

import ResponsiveImage from '~/components/atoms/ResponsiveImage.vue';
import * as constData from '~/config/const';
import footer from '~/hooks/images/footer';

export default Vue.extend({
  components: {
    ResponsiveImage,
  },
  data() {
    return {
      isMounted: false,
      footer,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    company(): string {
      return constData.company;
    },
    mdAndUp(): boolean {
      return this.isMounted ? this.$vuetify.breakpoint.mdAndUp : true;
    },
  },
});
</script>
