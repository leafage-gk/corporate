<template>
  <v-app class="m-plus-rounded-1c">
    <v-navigation-drawer v-model="drawer" fixed app v-if="!isBrowser">
      <v-list>
        <v-list-tile to="/" router exact>
          <v-list-tile-content>
            <v-list-tile-title>
              TOP
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/projects" router exact>
          <v-list-tile-content>
            <v-list-tile-title>
              プロジェクト
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/press" router exact>
          <v-list-tile-content>
            <v-list-tile-title>
              プレス
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/company" router exact>
          <v-list-tile-content>
            <v-list-tile-title>
              会社概要
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/contact" router exact>
          <v-list-tile-content>
            <v-list-tile-title>
              お問合わせ
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" flat v-if="isBrowser">
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
    <v-toolbar color="primary" flat fixed app v-else>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/" class="leafage-title">
          リーフエイジ合同会社
        </nuxt-link>
      </v-toolbar-title>
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

export default Vue.extend({
  data() {
    return {
      width: window ? window.innerWidth : null,
      drawer: false,
    };
  },
  computed: {
    isBrowser(): boolean {
      return this.width ? this.width > 768 : false;
    },
  },
  methods: {
    setResize() {
      this.width = window ? window.innerWidth : null;
    },
  },
  created() {
    if (window) {
      window.addEventListener('resize', () => {
        this.setResize();
      });
    }
  },
});
</script>

<style lang="stylus">
.leafage-title {
  color: white;
  text-decoration: none;
  outline: 0;
}
</style>
