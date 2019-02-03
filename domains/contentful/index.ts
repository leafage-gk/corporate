export * from './press';

export interface BlogPost {
  title: string;
  slug: string;
  body: string;
  publishedAt: string;
  headerImage?: string;
}
