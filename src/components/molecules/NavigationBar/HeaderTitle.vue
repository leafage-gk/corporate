<template>
  <v-toolbar-title>
    <nuxt-link to="/" class="leafage-title">
      <v-img :src="logo" max-width="60%" alt="リーフエイジ合同会社" />
    </nuxt-link>
  </v-toolbar-title>
</template>

<script lang="ts">
import Vue from 'vue';

import logo from '~/assets/images/leafage-logo_yoko.png';

export default Vue.extend({
  data() {
    return {
      logo,
    };
  },
});
</script>

<style lang="scss" scoped>
.leafage-title {
  text-decoration: none;
  outline: 0;
}
</style>
