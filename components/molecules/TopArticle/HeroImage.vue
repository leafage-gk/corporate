<template>
  <v-img
    class="align-center"
    gradient="to bottom, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    :aspect-ratio="smAndUp ? 16 / 7 : undefined"
    :height="!smAndUp ? 300 : undefined"
    :src="src"
  >
    <slot />
  </v-img>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    smAndUp(): boolean {
      return this.isMounted ? this.$vuetify.breakpoint.smAndUp : true;
    },
  },
});
</script>
