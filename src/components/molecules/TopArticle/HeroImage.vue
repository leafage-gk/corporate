<template>
  <responsive-image
    align="center"
    gradient="to bottom, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    :with-aspect-ratio="smAndUp"
    :aspect-ratio="16 / 7"
    :height="400"
    :srcs="srcs"
  >
    <slot />
  </responsive-image>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import ResponsiveImage from '~/components/atoms/ResponsiveImage.vue';
import { ResponsiveImageSrcs } from '~/hooks/images';

export default Vue.extend({
  components: {
    ResponsiveImage,
  },
  props: {
    srcs: {
      type: Object as PropType<ResponsiveImageSrcs>,
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
