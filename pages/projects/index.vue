<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center column>
        <v-subheader><h2>プロジェクト一覧</h2></v-subheader>
        <v-card to="/projects/hifumira">
          <v-img
            :src="require('~/assets/images/hifumira.jpg')"
            aspect-ratio="2.75"
            position="center top"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="myheadline mb-0">VTuberプロジェクトひふみら</h3>
              <div>
                バーチャルYouTuberプロジェクト進行中！
                弊社バーチャル社員「橘ひじり」「楠ふみか」「楪みらい」の三人のユニット「ひふみら」が仮想世界を駆け巡ります。
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" to="/projects/hifumira">詳細</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'プロジェクト一覧',
    };
  },
});
</script>

<style lang="stylus" scoped>
.myheadline {
  font-size: 20px;
}
</style>
