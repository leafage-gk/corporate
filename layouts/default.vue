<template>
  <v-app>
    <navigation-bar :browser="isBrowser" />
    <nuxt />
    <v-footer padless>
      <v-layout secondary lighten-2 justify-center row>
        <v-flex py-3 text-xs-center white--text>
          &copy; リーフエイジ合同会社 2020
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import NavigationBar from '~/components/organisms/NavigationBar.vue';

export default Vue.extend({
  components: {
    NavigationBar,
  },
  data() {
    return {
      isBrowser: true,
    };
  },
  methods: {
    setResize() {
      if (window) {
        this.isBrowser = window.innerWidth > 768;
      }
    },
  },
  mounted() {
    if (window) {
      window.addEventListener('resize', () => {
        this.setResize();
      });
      this.setResize();
    }
  },
});
</script>
