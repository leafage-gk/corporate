<template>
  <v-app-bar dark color="primary darken-2" flat fixed app>
    <v-app-bar-nav-icon @click="onClickNavIcon" />
    <header-title />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

import HeaderTitle from './HeaderTitle.vue';

export default Vue.extend({
  components: {
    HeaderTitle,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  methods: {
    onClickNavIcon() {
      this.$emit('input', !this.value);
    },
  },
});
</script>
