import { Context } from '@nuxt/types';
import { Moment } from 'moment';
import Vue from 'vue';

export default (context: Context) => {
  Vue.filter(
    'dateFormat',
    (val: string | number | Date | Moment, format: string): string => {
      return context.$moment(val).format(format);
    },
  );
};
