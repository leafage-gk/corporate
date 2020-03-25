<template>
  <v-app>
    <navigation-bar />
    <v-img
      v-if="mdAndUp"
      class="align-end"
      height="200"
      :src="pageHeader.src"
      :srcset="pageHeader.srcset"
      gradient="to bottom, rgba(100,115,201,.33), rgba(255,255,255,1)"
    >
    </v-img>
    <nuxt />
    <footer-layout />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import pageHeader1x from '~/assets/images/page_header.jpg';
import pageHeader2x from '~/assets/images/page_header@2x.jpg';
import FooterLayout from '~/components/organisms/FooterLayout.vue';
import NavigationBar from '~/components/organisms/NavigationBar.vue';

export default Vue.extend({
  components: {
    NavigationBar,
    FooterLayout,
  },
  data() {
    return {
      isMounted: false,
      pageHeader: {
        src: pageHeader1x,
        srcset: `${pageHeader1x} 1x, ${pageHeader2x} 2x`,
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
  },
});
</script>
