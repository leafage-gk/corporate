<template>
  <v-content>
    <v-container>
      <h1>{{ error.statusCode }} {{ error.message }}</h1>
      <h2 v-if="error.statusCode == 404">
        お探しのページは見つかりませんでした。
      </h2>
      <h1 v-else>
        エラーが発生しました
      </h1>
      <p v-if="error.statusCode == 404">
        あなたがアクセスしようとしたページは削除されたかURLが変更されているため、<br />
        見つけることができません。
      </p>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    error: Object,
  },
  head() {
    return {
      title: 'エラー',
    };
  },
});
</script>
