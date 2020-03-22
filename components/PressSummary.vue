<template>
  <v-card :to="to" :href="href">
    <v-layout row>
      <v-flex xs4 sm3 md2 lg1 grow>
        <v-img
          v-if="image"
          :src="image"
          height="100%"
          :gradient="imageGradient"
        />
        <v-img
          v-else
          src="~/assets/images/press_summary.jpg"
          height="100%"
          :gradient="imageGradient"
        />
      </v-flex>
      <v-flex shrink align-start>
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
      </v-flex>
    </v-layout>
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
