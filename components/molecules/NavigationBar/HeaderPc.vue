<template>
  <v-app-bar color="primary" flat>
    <header-title />
    <v-spacer />
    <v-btn
      text
      color="white"
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
    >
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import HeaderTitle from './HeaderTitle.vue';
import { HeaderBtnItem } from './item';

export default Vue.extend({
  components: {
    HeaderTitle,
  },
  props: {
    items: {
      type: Array as PropType<HeaderBtnItem[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.leafage-title {
  color: white;
  text-decoration: none;
  outline: 0;
}
</style>
