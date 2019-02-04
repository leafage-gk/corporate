import { ContentfulClientApi, Sys, Entry } from 'contentful';
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

export class PressPostSummary {
  public readonly title: string;
  public readonly summary: string;
  public readonly slug?: string;
  public readonly summaryImage?: string;
  public readonly publishedAt: string;
  public readonly sys: Sys;

  private readonly _linkTo?: string;

  public constructor(response: Entry<PressPostSummaryResponse>) {
    this.title = response.fields.title;
    this.summary = response.fields.summary;
    this.slug = response.fields.slug;
    if (response.fields.summaryImage) {
      this.summaryImage = response.fields.summaryImage.fields.file.url;
    }
    this.publishedAt = response.fields.publishedAt;
    this.sys = response.sys;
    this._linkTo = response.fields.linkTo;
  }

  public get linkTo(): string | undefined {
    if (this.slug) {
      return `/press/${this.slug}`;
    }
    return this._linkTo;
  }
}

export class PressPost extends PressPostSummary {
  public readonly headerImage?: string;

  private readonly _body?: string;

  public constructor(response: Entry<PressPostResponse>) {
    super(response);
    if (response.fields.headerImage) {
      this.headerImage = response.fields.headerImage.fields.file.url;
    }
    this._body = response.fields.body;
  }

  public get body(): string {
    if (this._body) {
      return this._body;
    }
    return this.summary;
  }
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
      return new PressPost(item);
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
      return new PressPostSummary(item);
    });
  }

  public async get(slug: string): Promise<PressPost | null> {
    const posts = await this.client.getEntries<PressPostResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'pressPost',
      'fields.slug': slug,
      order: '-sys.createdAt',
    });
    const items = posts.items.map(item => new PressPost(item));
    return items[0] || null;
  }
}
