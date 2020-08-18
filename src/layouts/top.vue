<template>
  <v-app>
    <navigation-bar />
    <nuxt />
    <footer-layout />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import FooterLayout from '~/components/organisms/FooterLayout.vue';
import NavigationBar from '~/components/organisms/NavigationBar.vue';

export default Vue.extend({
  components: {
    NavigationBar,
    FooterLayout,
  },
});
</script>
