<template>
  <hero-image :srcs="srcs">
    <v-container
      :fluid="mdAndUp"
      height="100%"
      :class="{ 'ma-0': true, 'pa-0': mdAndUp }"
    >
      <v-row>
        <v-col class="pa-0" align="center" justify="center">
          <v-card
            :color="mdAndUp ? 'rgba(0,0,0,.5)' : 'transparent'"
            flat
            :class="color"
          >
            <v-card-text class="pb-0">
              <v-icon :x-large="mdAndUp" :large="!mdAndUp" :class="color">
                {{ icon }}
              </v-icon>
            </v-card-text>
            <v-card-title class="text-h5 text-md-h4 justify-center">
              {{ title }}
            </v-card-title>
            <v-card-text class="white--text">
              <slot />
            </v-card-text>
            <v-card-actions class="justify-center pb-4" v-if="to">
              <v-btn :to="to" outlined>詳しく見る</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </hero-image>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { ResponsiveImageSrcs } from '~/hooks/images';

import HeroImage from './HeroImage.vue';

export default Vue.extend({
  components: {
    HeroImage,
  },
  props: {
    color: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    srcs: {
      type: Object as PropType<ResponsiveImageSrcs>,
      required: true,
    },
    to: {
      type: String,
      required: false,
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
    mdAndUp(): boolean {
      return this.isMounted ? this.$vuetify.breakpoint.mdAndUp : true;
    },
  },
});
</script>
