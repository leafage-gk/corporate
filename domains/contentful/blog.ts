import { ContentfulClientApi, Entry } from 'contentful';
import { MediaResponse } from './media';

export interface BlogPostSummaryResponse {
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
  summaryImage?: MediaResponse;
}

export interface BlogPostResponse extends BlogPostSummaryResponse {
  body: string;
  headerImage?: MediaResponse;
}

export interface BlogPostSummary {
  id: string;
  title: string;
  summary: string;
  slug: string;
  linkTo: string;
  publishedAt: string;
  summaryImage?: string;
}

export function responseToBlogPostSummary(
  response: Entry<BlogPostSummaryResponse>,
): BlogPostSummary {
  return {
    id: response.sys.id,
    title: response.fields.title,
    summary: response.fields.summary,
    slug: response.fields.slug,
    linkTo: `/press/${response.fields.slug}`,
    publishedAt: response.fields.publishedAt,
    summaryImage: response.fields.summaryImage
      ? response.fields.summaryImage.fields.file.url
      : undefined,
  };
}

export interface BlogPost extends BlogPostSummary {
  body: string;
  headerImage?: string;
}

export function responseToBlogPost(
  response: Entry<BlogPostResponse>,
): BlogPost {
  return Object.assign(responseToBlogPostSummary(response), {
    body: response.fields.body,
    headerImage: response.fields.headerImage
      ? response.fields.headerImage.fields.file.url
      : undefined,
  });
}

export class BlogRepository {
  private client: ContentfulClientApi;

  public constructor(client: ContentfulClientApi) {
    this.client = client;
  }

  public async all(): Promise<BlogPost[]> {
    const posts = await this.client.getEntries<BlogPostResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogPost',
    });
    return posts.items.map(item => {
      return responseToBlogPost(item);
    });
  }

  public async fetchRecently(
    skip: number,
    limit: number,
  ): Promise<BlogPostSummary[]> {
    const posts = await this.client.getEntries<BlogPostSummaryResponse>({
      select: [
        'fields.title',
        'fields.summary',
        'fields.slug',
        'fields.summaryImage',
        'fields.publishedAt',
      ].join(','),
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogPost',
      order: '-fields.publishedAt',
      skip,
      limit,
    });
    return posts.items.map(item => {
      return responseToBlogPostSummary(item);
    });
  }

  public async get(slug: string): Promise<BlogPost | undefined> {
    const posts = await this.client.getEntries<BlogPostResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'pressPost',
      'fields.slug': slug,
      order: '-sys.createdAt',
    });
    const items = posts.items.map(item => responseToBlogPost(item));
    return items[0] || undefined;
  }
}
