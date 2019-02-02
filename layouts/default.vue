<template>
  <v-app class="m-plus-rounded-1c">
    <v-toolbar color="primary" flat>
      <v-toolbar-title>
        <nuxt-link to="/" class="leafage-title">
          リーフエイジ合同会社
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat color="white" to="/projects">プロジェクト</v-btn>
        <v-btn flat color="white" to="/press">プレス</v-btn>
        <v-btn flat color="white" to="/company">会社概要</v-btn>
        <v-btn flat color="white" to="/contact">お問合せ</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt />
    <v-footer>
      <v-layout secondary lighten-2 justify-center row wrap>
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
.leafage-title {
  color: white;
  text-decoration: none;
  outline: 0;
}
</style>
