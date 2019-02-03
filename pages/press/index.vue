<template>
  <v-content>
    <v-container fluid>
      <v-layout align-center justify-center column>
        <v-subheader><h2>プレスリリース一覧</h2></v-subheader>
        <v-container class="pa-0">
          <v-flex v-bind:key="item.sys.id" v-for="(item, index) in posts">
            <press-summary
              :to="item.linkTo"
              :image="item.summaryImage"
              :title="item.title"
              :body="item.summary"
              :published-at="item.publishedAt"
            />
            <v-divider v-if="index < posts.length" />
          </v-flex>
        </v-container>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/vue-app-edge';
import PressSummary from '~/components/PressSummary.vue';

export default Vue.extend({
  components: {
    PressSummary,
  },
  async asyncData(context: Context) {
    const posts = await context.$press.fetchRecently(0, 10);
    return {
      posts,
    };
  },
  head() {
    return {
      title: 'プレスリリース一覧',
    };
  },
});
</script>
