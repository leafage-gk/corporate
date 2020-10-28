<template>
  <v-card width="100%" outlined>
    <v-row no-gutters v-if="mdAndUp">
      <v-col md="3" lg="2">
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
      <v-col cols="12" md="9" lg="10" class="d-flex flex-column">
        <v-card-text>
          <aside>
            <v-chip class="mx-2" color="primary" label>
              {{ pressType }}
            </v-chip>
            <span class="grey--text text-body-1">
              {{ $moment(publishedAt).format('YYYY年MM月DD日') }}
            </span>
          </aside>
          <h3 class="my-2 text-h5 font-weight-bold">
            <nuxt-link :to="`/press/${slug}`">{{ title }}</nuxt-link>
          </h3>
          <p class="text-body-2">
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
    <v-img
      v-else
      class="align-end"
      height="240"
      :src="
        image
          ? image + '?fit=crop&w=400&h=400'
          : require('~/assets/images/press_summary.jpg')
      "
    >
      <v-sheet color="rgba(33, 33, 33, 0.8)">
        <v-card-text class="pb-0">
          <aside class="mb-2">
            <v-chip small class="mx-1 text-caption" color="primary" label>
              {{ pressType }}
            </v-chip>
            <span class="grey--text text--lighten-2 text-body-2">
              {{ $moment(publishedAt).format('YYYY年MM月DD日') }}
            </span>
          </aside>
          <h3 class="text-subtitle-1 font-weight-bold">
            <nuxt-link :to="`/press/${slug}`" class="white--text">
              {{ title }}
            </nuxt-link>
          </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer />
          <v-btn text dark :to="`/press/${slug}`" class="mx-4">
            続きを読む
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-img>
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
