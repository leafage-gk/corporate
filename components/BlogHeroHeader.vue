<template>
  <v-img
    :src="image ? image : require('~/assets/images/press_header.jpg')"
    height="200"
  >
    <v-layout pa-2 column fill-height class="lightbox white--text">
      <v-spacer />
      <v-flex shrink>
        <div class="mysubheading">
          {{ title }}
        </div>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    image: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    title(): string {
      return this.subtitle
        ? `ひふみら＊ブログ - ${this.subtitle}`
        : 'ひふみら＊ブログ';
    },
  },
});
</script>

<style lang="stylus" scoped>
.mysubheading {
  font-size: 24px;
  font-weight: bold;
}
.lightbox {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 60px);
}
</style>
