import { Context } from '@nuxt/types';

import env from '~/config/env';

export interface CompanyInfo {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  overview: {
    fieldId: 'overview-item';
    title: string;
    content: string;
  }[];
}

export const companyRepositoryFactory = ($axios: Context['$axios']) => {
  return {
    fetch(draftKey?: string): Promise<CompanyInfo> {
      return $axios.$get<CompanyInfo>(
        'https://leafage.microcms.io/api/v1/company',
        {
          params: {
            draftKey,
          },
          headers: {
            'X-API-KEY': env.MICROCMS_X_API_KEY,
          },
        },
      );
    },
  };
};
