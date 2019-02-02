<template>
  <v-app class="nico-moji">
    <v-toolbar color="green" fixed app flat>
      <v-toolbar-title>
        <nuxt-link to="/projects/hifumira" class="hifumira-title">
          ひふみら
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn flat color="white" to="/projects/hifumira/news">
          ニュース
        </v-btn>
        <v-btn flat color="white" to="/projects/hifumira/contact">
          お問合せ
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <v-layout lime lighten-2 justify-center row wrap>
        <v-btn flat color="white" to="/">
          運営会社
        </v-btn>
        <v-divider />
        <v-flex py-3 text-xs-center white--text>
          &copy; リーフエイジ合同会社 2019
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="stylus">
.hifumira-title {
  color: white;
  text-decoration: none;
  outline: 0;
}
</style>
