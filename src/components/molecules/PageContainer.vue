<template>
  <v-container fluid>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <v-row justify="start" align="center">
          <v-col cols="12">
            <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
          </v-col>
        </v-row>
        <v-row :justify="justify" align="center">
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
    justify: {
      type: String,
      default: 'start',
    },
  },
});
</script>
