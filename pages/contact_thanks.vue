<template>
  <v-content>
    <v-container>
      <v-row class="my-5" align="center">
        <v-col cols="12">
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              お問合せ完了
            </v-card-title>
            <v-card-text class="pt-5">
              <p>
                お問合せ誠にありがとうございます。3営業日以内に担当者から返信させていただきます。少々お待ち下さい。
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head: {
    title: 'お問合せ完了',
  },
});
</script>
