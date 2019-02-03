import Vue from 'vue';
import { Moment } from 'moment';
import { Context } from '@nuxt/vue-app-edge';

export default (context: Context) => {
  Vue.filter(
    'dateFormat',
    (val: string | number | Date | Moment, format: string): string => {
      return context.$moment(val).format(format);
    },
  );
};
