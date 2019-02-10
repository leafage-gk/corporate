<template>
  <v-content>
    <v-layout column align-center justify-center class="ma-5">
      <h1 class="text-xs-center">
        Coming Soon!
      </h1>
    </v-layout>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <a
                  class="twitter-timeline"
                  href="https://twitter.com/t_hiziri123?ref_src=twsrc%5Etfw"
                  height="500"
                >
                  Tweets by t_hiziri123
                </a>
              </v-flex>
              <v-flex xs12 md4>
                <a
                  class="twitter-timeline"
                  href="https://twitter.com/k_fumika123?ref_src=twsrc%5Etfw"
                  height="500"
                >
                  Tweets by k_fumika123
                </a>
              </v-flex>
              <v-flex xs12 md4>
                <a
                  class="twitter-timeline"
                  href="https://twitter.com/y_mirai123?ref_src=twsrc%5Etfw"
                  height="500"
                >
                  Tweets by y_mirai123
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'VTuberプロジェクト＊ひふみら',
    };
  },
});
</script>
