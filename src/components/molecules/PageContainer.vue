<template>
  <v-container>
    <v-row justify="start" align="center">
      <v-col cols="12">
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row :justify="justify" :align="align" :class="{ 'px-5': padding }">
      <slot />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true,
    },
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'center',
    },
    padding: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
