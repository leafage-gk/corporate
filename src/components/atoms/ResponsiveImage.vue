<template>
  <client-only>
    <template>
      <v-img
        :class="{ [`align-${align}`]: true }"
        :gradient="gradient"
        :aspect-ratio="withAspectRatio ? aspectRatio : undefined"
        :height="!withAspectRatio ? height : undefined"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
      >
        <slot />
      </v-img>
    </template>
    <template v-slot:placeholder>
      <slot />
    </template>
  </client-only>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

import { ResponsiveImageSrcs } from '~/hooks/images';

export default Vue.extend({
  props: {
    align: {
      type: String,
      required: true,
    },
    srcs: {
      type: Object as PropType<ResponsiveImageSrcs>,
      required: true,
    },
    height: {
      type: Number,
      default: 300,
    },
    withAspectRatio: {
      type: Boolean,
      default: false,
    },
    aspectRatio: {
      type: Number,
      default: 16 / 5,
    },
    gradient: {
      type: String,
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
    sizes(): string {
      const width = this.$vuetify.breakpoint.width;
      const percent = 100 * this.srcs.aspectRatio;
      const vw = this.withAspectRatio
        ? Math.round(percent / this.aspectRatio)
        : Math.round(percent / (width / this.height));
      return (vw < 100 ? 100 : vw) + 'vw';
    },
    calcuratedAspectRatio(): number {
      return this.$vuetify.breakpoint.width / this.height;
    },
  },
});
</script>
