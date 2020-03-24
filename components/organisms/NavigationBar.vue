<template>
  <v-sheet>
    <header-pc :items="$accessor.system.config.headerBtnItems" v-if="mdAndUp" />
    <template v-else>
      <drawer v-model="drawer" :items="$accessor.system.config.drawerItems" />
      <header-sp v-model="drawer" />
    </template>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  Drawer,
  HeaderPc,
  HeaderSp,
} from '~/components/molecules/NavigationBar';

export default Vue.extend({
  components: {
    Drawer,
    HeaderSp,
    HeaderPc,
  },
  data() {
    return {
      drawer: false,
      isMounted: false,
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
