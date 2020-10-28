<template>
  <v-img
    class="align-center"
    gradient="to bottom, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    height="100%"
    :src="src"
    :srcset="srcset"
  >
    <slot />
  </v-img>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { ResponsiveImageSrcs } from '~/hooks/images';

export default Vue.extend({
  props: {
    srcs: {
      type: Object as PropType<ResponsiveImageSrcs>,
      required: true,
    },
  },
  computed: {
    src(): string {
      return this.srcs.src600w;
    },
    srcset(): string {
      return [
        `${this.srcs.src600w} 600w`,
        `${this.srcs.src960w} 960w`,
        `${this.srcs.src1280w} 1280w`,
        `${this.srcs.src1920w} 1920w`,
      ].join(', ');
    },
  },
});
</script>
