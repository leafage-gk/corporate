import { ContentfulClientApi, Entry } from 'contentful';
import { MediaResponse } from './media';

export interface PressPostSummaryResponse {
  title: string;
  summary: string;
  slug?: string;
  linkTo?: string;
  summaryImage?: MediaResponse;
  publishedAt: string;
}

export interface PressPostResponse extends PressPostSummaryResponse {
  body?: string;
  headerImage?: MediaResponse;
}

export interface PressPostSummary {
  id: string;
  title: string;
  summary: string;
  slug?: string;
  linkTo?: string;
  summaryImage?: string;
  publishedAt: string;
}

export function responseToPressPostSummary(
  response: Entry<PressPostSummaryResponse>,
): PressPostSummary {
  return {
    id: response.sys.id,
    title: response.fields.title,
    summary: response.fields.summary,
    slug: response.fields.slug,
    linkTo: response.fields.slug
      ? `/press/${response.fields.slug}`
      : response.fields.linkTo,
    summaryImage: response.fields.summaryImage
      ? response.fields.summaryImage.fields.file.url
      : undefined,
    publishedAt: response.fields.publishedAt,
  };
}

export interface PressPost extends PressPostSummary {
  body?: string;
  headerImage?: string;
}

export function responseToPressPost(
  response: Entry<PressPostResponse>,
): PressPost {
  return Object.assign(responseToPressPostSummary(response), {
    body: response.fields.body ? response.fields.body : response.fields.summary,
    headerImage: response.fields.headerImage
      ? response.fields.headerImage.fields.file.url
      : undefined,
  });
}

export class PressRepository {
  private client: ContentfulClientApi;

  public constructor(client: ContentfulClientApi) {
    this.client = client;
  }

  public async all(): Promise<PressPost[]> {
    const posts = await this.client.getEntries<PressPostSummaryResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'pressPost',
    });
    return posts.items.map(item => {
      return responseToPressPost(item);
    });
  }

  public async fetchRecently(
    skip: number,
    limit: number,
  ): Promise<PressPostSummary[]> {
    const posts = await this.client.getEntries<PressPostSummaryResponse>({
      select: [
        'fields.title',
        'fields.summary',
        'fields.slug',
        'fields.linkTo',
        'fields.summaryImage',
        'fields.publishedAt',
      ].join(','),
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'pressPost',
      order: '-fields.publishedAt',
      skip,
      limit,
    });
    return posts.items.map(item => {
      return responseToPressPostSummary(item);
    });
  }

  public async get(slug: string): Promise<PressPost | undefined> {
    const posts = await this.client.getEntries<PressPostResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'pressPost',
      'fields.slug': slug,
      order: '-sys.createdAt',
    });
    const items = posts.items.map(item => responseToPressPost(item));
    return items[0] || undefined;
  }
}
