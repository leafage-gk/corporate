import moment from 'moment';

import { companyRepositoryFactory } from '~/domains/company';
import { pressRepositoryFactory } from '~/domains/press';

interface InjectedByPlugin {
  $press: ReturnType<typeof pressRepositoryFactory>;
  $company: ReturnType<typeof companyRepositoryFactory>;
  $moment: typeof moment;
}

declare module '@nuxt/types' {
  interface Context extends InjectedByPlugin {}
}

declare module 'vue/types/vue' {
  interface Vue extends InjectedByPlugin {}
}
