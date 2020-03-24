import { getAccessorType } from 'typed-vuex';

import * as system from '~/store/system';

export const accessorType = getAccessorType({
  modules: {
    system,
  },
});
