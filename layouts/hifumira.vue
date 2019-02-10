<template>
  <v-app class="nico-moji">
    <!-- <v-navigation-drawer v-model="drawer" fixed app v-if="!isBrowser">
      <v-list>
        <v-list-tile to="/" router exact>
          <v-list-tile-content>
            <v-list-tile-title>
              TOP
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/blog" router exact>
          <v-list-tile-content>
            <v-list-tile-title>
              ブログ
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar color="green" flat v-if="isBrowser">
      <v-toolbar-title>
        <nuxt-link to="/projects/hifumira" class="hifumira-title">
          ひふみら
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn flat color="white" to="/projects/hifumira/blog">
          ブログ
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-toolbar color="green" flat fixed app v-else>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/projects/hifumira" class="hifumira-title">
          ひふみら
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>
    <nuxt />
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

export default Vue.extend({
  data() {
    return {
      isBrowser: true,
      drawer: false,
    };
  },
  methods: {
    setResize() {
      if (window) {
        this.isBrowser = window.innerWidth > 768;
      }
    },
  },
  // mounted() {
  //   if (window) {
  //     window.addEventListener('resize', () => {
  //       this.setResize();
  //     });
  //     this.setResize();
  //   }
  // },
});
</script>

<style lang="stylus">
.hifumira-title {
  color: white;
  text-decoration: none;
  outline: 0;
}
</style>
