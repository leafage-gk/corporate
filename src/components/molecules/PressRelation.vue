<template>
  <v-card height="100%">
    <v-img
      class="white--text align-end"
      height="200px"
      gradient="to top, rgba(0, 0, 0, 0.4) 0%, rgba(0,0,0,0) 60px"
      :src="
        press.thumbnail
          ? press.thumbnail.url + '?fit=crop&w=400&h=200'
          : require('~/assets/images/press_summary.jpg')
      "
    >
      <v-card-title v-if="title" class="font-weight-bold">
        <nuxt-link :to="`/press/${press.slug}`" class="white--text">
          {{ title }}
        </nuxt-link>
      </v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">
      {{ $moment(press.publishedAt).format('YYYY年MM月DD日') }}
    </v-card-subtitle>
    <v-card-text>
      <nuxt-link :to="`/press/${press.slug}`" class="black--text">
        {{ press.title }}
      </nuxt-link>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { PressPostRelation } from '~/domains/press';

export default Vue.extend({
  props: {
    title: String,
    press: {
      type: Object as PropType<PressPostRelation>,
      required: true,
    },
  },
});
</script>
