<template>
  <v-sheet>
    <header-pc :items="headerBtnItems" v-if="mdAndUp" />
    <template v-else>
      <drawer v-model="drawer" :items="drawerItems" />
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
import * as constData from '~/config/const';

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
    headerBtnItems() {
      return constData.headerBtnItems;
    },
    drawerItems() {
      return constData.drawerItems;
    },
    mdAndUp(): boolean {
      return this.isMounted ? this.$vuetify.breakpoint.mdAndUp : true;
    },
  },
});
</script>
