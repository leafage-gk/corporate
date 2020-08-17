import { Context } from '@nuxt/types';

import env from '~/config/env';

export interface PressType {
  id: string;
  title: string;
}

export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
}

export interface PressPostRelation extends NewsPost {
  thumbnail?: {
    url: string;
  };
}

export interface NewsPostResponse {
  contents: NewsPost[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface PressPostSummary extends PressPostRelation {
  summary: string;
  type: PressType;
}

export interface PressPostSummaryResponse {
  contents: PressPostSummary[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface RichEditor {
  fieldId: 'richEditor';
  richEditor: string;
}

export interface HTMLEditor {
  fieldId: 'html';
  html: string;
}

export type BodyType = RichEditor | HTMLEditor;

export interface PressPost extends PressPostSummary {
  body: BodyType[];
  createdAt: string;
  updatedAt: string;
  prev: PressPostRelation | null;
  next: PressPostRelation | null;
  relatedArticles: PressPostRelation[];
}

export interface PressPostResponse {
  contents: PressPost[];
  totalCount: number;
  offset: number;
  limit: number;
}

export const pressRepositoryFactory = ($axios: Context['$axios']) => {
  const summaryFields =
    'id,slug,title,thumbnail,summary,publishedAt,type.id,type.title';
  const prev = 'prev.id,prev.slug,prev.title,prev.thumbnail,prev.publishedAt';
  const next = 'next.id,next.slug,next.title,next.thumbnail,next.publishedAt';
  const relatedArticles =
    'relatedArticles.id,relatedArticles.slug,relatedArticles.title,relatedArticles.thumbnail,relatedArticles.publishedAt';
  const bodyFields = [
    summaryFields,
    'body,createdAt,updatedAt',
    prev,
    next,
    relatedArticles,
  ].join(',');

  return {
    fetchNews(): Promise<NewsPostResponse> {
      return $axios.$get<NewsPostResponse>(
        'https://leafage.microcms.io/api/v1/news',
        {
          params: {
            offset: 0,
            limit: 3,
            fields: 'id,slug,title,publishedAt',
            order: '-publishedAt,-updatedAt',
            filters: `type[equals]2u9ctzqlxi`,
          },
          headers: {
            'X-API-KEY': env.MICROCMS_X_API_KEY,
          },
        },
      );
    },
    fetchRecently(
      type: string,
      offset: number,
      limit: number,
    ): Promise<PressPostSummaryResponse> {
      return $axios.$get<PressPostSummaryResponse>(
        'https://leafage.microcms.io/api/v1/news',
        {
          params: {
            offset,
            limit,
            fields: summaryFields,
            order: '-publishedAt,-updatedAt',
            filters: `type[equals]${type}`,
          },
          headers: {
            'X-API-KEY': env.MICROCMS_X_API_KEY,
          },
        },
      );
    },
    async getBySlug(slug: string): Promise<PressPost> {
      const items = await $axios.$get<PressPostResponse>(
        'https://leafage.microcms.io/api/v1/news',
        {
          params: {
            filters: `slug[equals]${slug}`,
            fields: bodyFields,
          },
          headers: {
            'X-API-KEY': env.MICROCMS_X_API_KEY,
          },
        },
      );
      return items.contents[0] || undefined;
    },
    getById(id: string, draftKey?: string): Promise<PressPost> {
      return $axios.$get<PressPost>(
        `https://leafage.microcms.io/api/v1/news/${id}`,
        {
          params: {
            draftKey,
            fields: bodyFields,
          },
          headers: {
            'X-API-KEY': env.MICROCMS_X_API_KEY,
          },
        },
      );
    },
  };
};
