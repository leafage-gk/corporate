<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="white--text text-center">
      <v-img
        height="200"
        gradient="to top, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        class="align-center"
        :src="footerImage.src"
        :srcset="footerImage.srcset"
      >
        <v-card-text>
          <p :class="footerText">
            最先端のシステム構築からWebデザインまで
          </p>
          <p :class="footerText">
            Webに関することなら当社へお気軽にご相談ください
          </p>
        </v-card-text>
        <v-btn :x-large="mdAndUp" text color="accent lighten-1">
          お問い合わせ
        </v-btn>
      </v-img>
      <v-card-text class="secondary darken-4 white--text">
        <p class="ma-0">
          &copy; {{ $accessor.system.config.company }}
          {{ new Date().getFullYear() }}
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

import footerImage1x from '~/assets/images/footer.jpg';
import footerImage2x from '~/assets/images/footer@2x.jpg';

export default Vue.extend({
  data() {
    return {
      isMounted: false,
      footerImage: {
        src: footerImage1x,
        srcset: `${footerImage1x} 1x, ${footerImage2x} 2x`,
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
