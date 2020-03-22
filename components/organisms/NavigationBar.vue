<template>
  <v-sheet>
    <header-pc :items="headerBtnItems" v-if="browser" />
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
  DrawerItem,
  HeaderBtnItem,
  HeaderPc,
  HeaderSp,
} from '~/components/molecules/NavigationBar';

const drawerItems: DrawerItem[] = [
  { title: 'TOP', to: '/' },
  { title: 'プレス', to: '/press' },
  { title: '会社概要', to: '/company' },
  { title: 'お問合わせ', to: '/contact' },
];

const headerBtnItems: HeaderBtnItem[] = [
  { title: 'プレス', to: '/press' },
  { title: '会社概要', to: '/company' },
  { title: 'お問合わせ', to: '/contact' },
];

export default Vue.extend({
  components: {
    Drawer,
    HeaderSp,
    HeaderPc,
  },
  props: {
    browser: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    drawerItems() {
      return drawerItems;
    },
    headerBtnItems() {
      return headerBtnItems;
    },
  },
});
</script>
