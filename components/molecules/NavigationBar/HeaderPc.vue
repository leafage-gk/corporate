<template>
  <v-app-bar :color="barColor" fixed elevate-on-scroll v-scroll="onScroll">
    <header-title />
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        text
        :class="{
          'accent-header-btn': item.accent,
          'header-btn': !item.accent,
        }"
        active-class="active-header-btn"
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { HeaderBtnItem } from '~/config/const';

import HeaderTitle from './HeaderTitle.vue';

export default Vue.extend({
  components: {
    HeaderTitle,
  },
  data() {
    return {
      top: true,
    };
  },
  props: {
    items: {
      type: Array as PropType<HeaderBtnItem[]>,
      required: true,
    },
  },
  computed: {
    barColor(): string {
      return this.top ? 'rgba(0, 0, 0, 0.6)' : 'primary darken-2';
    },
  },
  methods: {
    onScroll() {
      if (window) {
        this.top = window.scrollY === 0;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@mixin btn-bg($color, $opacity, $color-hover, $opacity-hover) {
  &::before {
    background-color: $color;
    opacity: $opacity;
  }
  &:hover::before {
    background-color: $color-hover;
    opacity: $opacity-hover;
  }
}

.header-btn,
.accent-header-btn,
.active-header-btn {
  color: white;
}
.header-btn {
  @include btn-bg(transparent, 0, white, 0.5);
}
.accent-header-btn {
  @include btn-bg(
    map-get($orange, darken-2),
    1,
    map-get($orange, lighten-2),
    1
  );
}
.active-header-btn {
  @include btn-bg(white, 0.5, white, 0.6);
}
.accent-header-btn.active-header-btn {
  @include btn-bg(
    map-get($orange, accent-2),
    1,
    map-get($orange, lighten-2),
    1
  );
}
</style>
