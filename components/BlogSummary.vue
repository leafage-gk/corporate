<template>
  <v-card :to="to">
    <v-layout row>
      <v-flex xs4 sm3 md2 lg1 grow>
        <v-img :src="image" height="100%">
          <v-layout column fill-height pa-1 class="lightbox white--text">
            <v-spacer />
            <v-flex shrink>
              <div>執筆者</div>
              <div>
                <nuxt-link :to="author.to" class="author-link">
                  {{ author.name }}
                </nuxt-link>
              </div>
            </v-flex>
          </v-layout>
        </v-img>
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
            </p>
            <v-btn
              v-bind:key="category.id"
              v-for="category in categories"
              :to="category.to"
              small
              round
              depressed
            >
              {{ category.name }}
            </v-btn>
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
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    publishedAt: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="stylus" scoped>
.lightbox {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}
.author-link {
  color: white;
  text-decoration: none;
  outline: 0;
}
</style>
