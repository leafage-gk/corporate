<template>
  <v-card
    width="100%"
    outlined
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
  >
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="4" md="3" lg="2">
          <v-img
            v-if="image"
            height="100%"
            :src="image"
            :gradient="imageGradient"
          />
          <v-img
            v-else
            height="100%"
            :src="require('~/assets/images/press_summary.jpg')"
            :gradient="imageGradient"
          />
        </v-col>
        <v-col cols="8" md="9" lg="10">
          <v-card-text primary-title>
            <div>
              <span class="grey--text">
                {{ publishedAt | dateFormat('YYYY年MM月DD日') }}
              </span>
              <h3>{{ title }}</h3>
              <p>
                {{ body }}
                <span v-if="href">
                  <br />
                  <a :href="href">詳細</a>
                </span>
                <span v-else-if="to">
                  <br />
                  <nuxt-link :to="to">詳細</nuxt-link>
                </span>
              </p>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    body: {
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
      imageGradient: [
        'to right',
        'rgba(255,255,255,.0)',
        'rgba(255,255,255,0)',
        'rgba(255,255,255,1)',
      ].join(', '),
    };
  },
});
</script>
