import { Plugin } from '@nuxt/types';
import { Moment } from 'moment';
import Vue from 'vue';

const plugin: Plugin = ctx => {
  Vue.filter(
    'dateFormat',
    (val: string | number | Date | Moment, format: string): string => {
      return ctx.$moment(val).format(format);
    },
  );
};

export default plugin;
