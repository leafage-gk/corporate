<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="white--text text-center">
      <responsive-image
        :height="200"
        gradient="to top, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        align="center"
        :srcs="footer"
      >
        <v-card-text>
          <p :class="footerText">
            最先端のシステム構築からWebデザインまで
          </p>
          <p :class="footerText">
            Webに関することなら当社へお気軽にご相談ください
          </p>
        </v-card-text>
        <v-btn :x-large="mdAndUp" text color="accent lighten-1" to="/contact">
          お問い合わせ
        </v-btn>
      </responsive-image>
      <v-card-text class="secondary darken-4 white--text">
        <p class="ma-0">
          &copy; {{ company }}
          {{ new Date().getFullYear() }}
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

import ResponsiveImage from '~/components/atoms/ResponsiveImage.vue';
import constData from '~/config/const';
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
    footerText(): Record<string, boolean> {
      return {
        'subtitle-1': this.mdAndUp,
        'body-2': !this.mdAndUp,
        'ma-0': true,
      };
    },
  },
});
</script>
