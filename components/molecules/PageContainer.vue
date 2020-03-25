<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" md="8">
        <v-row justify="start" align="center">
          <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
        </v-row>
        <v-row justify="start" align="center">
          <slot />
        </v-row>
      </v-col>
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
  },
});
</script>
