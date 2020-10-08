<template>
  <page-container :items="items" justify="center" align="start" padding>
    <v-col sm="12" md="8" lg="9">
      <v-row class="mr-lg-10" justify="center">
        <v-card
          class="body-theme"
          color="white"
          elevation="2"
          min-width="100%"
          rounded
        >
          <v-img
            class="align-end"
            :src="imageSrc"
            :srcset="imageSrcset"
            aspect-ratio="2"
            gradient="to top, rgba(0, 0, 0, 0.6) 0%, transparent 70%"
          >
            <v-card-title>
              <h1 class="white--text text-h4">
                {{ press.title }}
              </h1>
            </v-card-title>
          </v-img>
          <v-card-subtitle>
            <v-chip class="mx-2" color="primary" label>
              {{ press.type.title }}
            </v-chip>
            <span class="grey--text">
              {{ $moment(press.publishedAt).format('YYYY年MM月DD日') }}
            </span>
          </v-card-subtitle>
          <v-card-text class="pa-5">
            <template v-for="(item, index) in press.body">
              <div
                v-if="item.fieldId === 'richEditor'"
                v-html="item.richEditor"
                :key="index"
              />
              <div v-else v-html="item.html" :key="index" />
            </template>
          </v-card-text>
        </v-card>
      </v-row>
      <v-row class="mr-lg-10" justify="center">
        <v-divider class="mt-10 mb-5" />
      </v-row>
      <v-row>
        <v-col v-if="press.prev" cols="12" sm="6" md="6" lg="4">
          <press-relation :press="press.prev" title="前の記事" />
        </v-col>
        <v-col v-if="press.next" cols="12" sm="6" md="6" lg="4">
          <press-relation :press="press.next" title="次の記事" />
        </v-col>
      </v-row>
    </v-col>
    <v-col sm="12" md="4" lg="3">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h5 white--text primary darken-1 pa-1 text-center">
            おすすめ
          </h2>
        </v-col>
        <v-col
          v-for="(related, index) in press.relatedArticles"
          :key="index"
          cols="12"
          sm="6"
          md="12"
        >
          <press-relation :press="related" />
        </v-col>
      </v-row>
    </v-col>
  </page-container>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import PressHeader from '~/assets/images/page_header@1280w.webp';
import PageContainer from '~/components/molecules/PageContainer.vue';
import PressRelation from '~/components/molecules/PressRelation.vue';
import { PressPost } from '~/domains/press';

export default Vue.extend({
  props: {
    press: {
      type: Object as PropType<PressPost>,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    PageContainer,
    PressRelation,
  },
  computed: {
    imageSrc(): string {
      return this.press && this.press.thumbnail
        ? this.press.thumbnail.url + '?h=400&w=800&fit=crop&dpr=1'
        : PressHeader;
    },
    imageSrcset(): string {
      if (this.press && this.press.thumbnail) {
        return [
          this.press.thumbnail.url + '?h=400&w=800&fit=crop&dpr=1 1x',
          this.press.thumbnail.url + '?h=800&w=1600&fit=crop&dpr=2 2x',
        ].join(',');
      } else {
        return PressHeader;
      }
    },
  },
});
</script>
