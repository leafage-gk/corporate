<template>
  <v-toolbar-title>
    <nuxt-link to="/" class="leafage-title">
      <v-img
        :src="logo"
        :srcset="logoSet"
        max-width="60%"
        alt="リーフエイジ合同会社"
      />
    </nuxt-link>
  </v-toolbar-title>
</template>

<script lang="ts">
import Vue from 'vue';

import logo1x from '~/assets/images/leafage-logo_yoko.png';
import logo2x from '~/assets/images/leafage-logo_yoko@2x.png';

export default Vue.extend({
  data() {
    return {
      logo: logo1x,
      logoSet: `${logo1x} 1x, ${logo2x} 2x`,
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
