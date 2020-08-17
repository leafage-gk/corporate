<template>
  <v-card width="100%" outlined>
    <v-row no-gutters>
      <v-col cols="4" md="3" lg="2">
        <v-card width="100%" height="100%" flat tile :to="`/press/${slug}`">
          <v-img
            v-if="image"
            height="100%"
            :src="image + '?fit=crop&w=400&h=400'"
          />
          <v-img
            v-else
            height="100%"
            :src="require('~/assets/images/press_summary.jpg')"
          />
        </v-card>
      </v-col>
      <v-col cols="8" md="9" lg="10" class="d-flex flex-column">
        <v-card-text>
          <aside>
            <v-chip class="mx-2" color="primary" label>
              {{ pressType }}
            </v-chip>
            <span class="grey--text body-1">
              {{ $moment(publishedAt).format('YYYY年MM月DD日') }}
            </span>
          </aside>
          <h3 class="my-2 headline font-weight-bold">
            <nuxt-link :to="`/press/${slug}`">{{ title }}</nuxt-link>
          </h3>
          <p class="subheading">
            {{ summary }}
          </p>
        </v-card-text>
        <v-spacer />
        <v-card-actions>
          <v-spacer />
          <v-btn outlined color="primary" :to="`/press/${slug}`" class="mx-4">
            続きを読む
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    pressType: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: String,
      required: true,
    },
  },
});
</script>
