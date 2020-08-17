<template>
  <v-app>
    <navigation-bar />
    <responsive-image
      v-if="mdAndUp"
      align="end"
      :height="200"
      :srcs="pageHeader"
      gradient="to bottom, rgba(100,115,201,.33), rgba(255,255,255,1)"
    >
    </responsive-image>
    <nuxt />
    <footer-layout />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import ResponsiveImage from '~/components/atoms/ResponsiveImage.vue';
import FooterLayout from '~/components/organisms/FooterLayout.vue';
import NavigationBar from '~/components/organisms/NavigationBar.vue';
import pageHeader from '~/hooks/images/page_header';

export default Vue.extend({
  components: {
    ResponsiveImage,
    NavigationBar,
    FooterLayout,
  },
  data() {
    return {
      isMounted: false,
      pageHeader,
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
});
</script>
