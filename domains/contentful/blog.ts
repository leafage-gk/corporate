import { ContentfulClientApi, Entry } from 'contentful';
import { MediaResponse } from './media';

export interface BlogAuthorResponse {
  name: string;
  slug: string;
  icon: MediaResponse;
}

export interface BlogCategoryResponse {
  name: string;
  slug: string;
}

export interface BlogPostSummaryResponse {
  title: string;
  author: Entry<BlogAuthorResponse>;
  categories: Entry<BlogCategoryResponse>[];
  summary: string;
  slug: string;
  publishedAt: string;
  summaryImage?: MediaResponse;
}

export interface BlogPostResponse extends BlogPostSummaryResponse {
  body: string;
  headerImage?: MediaResponse;
}

export interface BlogAuthor {
  id: string;
  name: string;
  slug: string;
  icon: string;
  to: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  to: string;
}

export interface BlogPostSummary {
  id: string;
  title: string;
  author: BlogAuthor;
  categories: BlogCategory[];
  summary: string;
  slug: string;
  linkTo: string;
  publishedAt: string;
  summaryImage: string;
}

export function responseToBlogAuthor(
  response: Entry<BlogAuthorResponse>,
): BlogAuthor {
  return {
    id: response.sys.id,
    name: response.fields.name,
    slug: response.fields.slug,
    icon: response.fields.icon.fields.file.url,
    to: `/projects/hifumira/blog/authors/${response.fields.slug}`,
  };
}

export function responseToBlogCategory(
  response: Entry<BlogCategoryResponse>,
): BlogCategory {
  return {
    id: response.sys.id,
    name: response.fields.name,
    slug: response.fields.slug,
    to: `/projects/hifumira/blog/categories/${response.fields.slug}`,
  };
}

export function responseToBlogPostSummary(
  response: Entry<BlogPostSummaryResponse>,
): BlogPostSummary {
  const author = response.fields.author;
  return {
    id: response.sys.id,
    title: response.fields.title,
    author: responseToBlogAuthor(author),
    categories: response.fields.categories.map(category =>
      responseToBlogCategory(category),
    ),
    summary: response.fields.summary,
    slug: response.fields.slug,
    linkTo: `/projects/hifumira/blog/posts/${response.fields.slug}`,
    publishedAt: response.fields.publishedAt,
    summaryImage: response.fields.summaryImage
      ? response.fields.summaryImage.fields.file.url
      : author.fields.icon.fields.file.url,
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

export class BlogCategoryRepository {
  private client: ContentfulClientApi;

  public constructor(client: ContentfulClientApi) {
    this.client = client;
  }

  public async all(): Promise<BlogCategory[]> {
    const posts = await this.client.getEntries<BlogCategoryResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogCategory',
    });
    return posts.items.map(item => responseToBlogCategory(item));
  }

  public async get(slug: string): Promise<BlogCategory | undefined> {
    const posts = await this.client.getEntries<BlogCategoryResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogCategory',
      'fields.slug': slug,
      order: '-sys.createdAt',
    });
    const items = posts.items.map(item => responseToBlogCategory(item));
    return items[0] || undefined;
  }
}

export class BlogAuthorRepository {
  private client: ContentfulClientApi;

  public constructor(client: ContentfulClientApi) {
    this.client = client;
  }

  public async all(): Promise<BlogAuthor[]> {
    const posts = await this.client.getEntries<BlogAuthorResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogAuthor',
    });
    return posts.items.map(item => responseToBlogAuthor(item));
  }

  public async get(slug: string): Promise<BlogAuthor | undefined> {
    const posts = await this.client.getEntries<BlogAuthorResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogAuthor',
      'fields.slug': slug,
      order: '-sys.createdAt',
    });
    const items = posts.items.map(item => responseToBlogAuthor(item));
    return items[0] || undefined;
  }
}

export class BlogRepository {
  public readonly category: BlogCategoryRepository;
  public readonly author: BlogAuthorRepository;
  private client: ContentfulClientApi;
  private summarySelect = [
    'fields.title',
    'fields.author',
    'fields.categories',
    'fields.summary',
    'fields.slug',
    'fields.summaryImage',
    'fields.publishedAt',
  ].join(',');

  public constructor(client: ContentfulClientApi) {
    this.category = new BlogCategoryRepository(client);
    this.author = new BlogAuthorRepository(client);
    this.client = client;
  }

  public async all(): Promise<BlogPost[]> {
    const posts = await this.client.getEntries<BlogPostResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogPost',
    });
    return posts.items.map(item => responseToBlogPost(item));
  }

  public async fetchRecently(
    skip: number,
    limit: number,
  ): Promise<BlogPostSummary[]> {
    const posts = await this.client.getEntries<BlogPostSummaryResponse>({
      select: this.summarySelect,
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogPost',
      order: '-fields.publishedAt',
      skip,
      limit,
    });
    return posts.items.map(item => responseToBlogPostSummary(item));
  }

  public async fetchByCategory(
    id: string,
    skip: number,
    limit: number,
  ): Promise<BlogPostSummary[]> {
    const posts = await this.client.getEntries<BlogPostSummaryResponse>({
      select: this.summarySelect,
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogPost',
      order: '-fields.publishedAt',
      'fields.categories.sys.id': id,
      skip,
      limit,
    });
    return posts.items.map(item => responseToBlogPostSummary(item));
  }

  public async fetchByAuthor(
    id: string,
    skip: number,
    limit: number,
  ): Promise<BlogPostSummary[]> {
    const posts = await this.client.getEntries<BlogPostSummaryResponse>({
      select: this.summarySelect,
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogPost',
      order: '-fields.publishedAt',
      'fields.author.sys.id': id,
      skip,
      limit,
    });
    return posts.items.map(item => responseToBlogPostSummary(item));
  }

  public async get(slug: string): Promise<BlogPost | undefined> {
    const posts = await this.client.getEntries<BlogPostResponse>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'blogPost',
      'fields.slug': slug,
      order: '-sys.createdAt',
    });
    const items = posts.items.map(item => responseToBlogPost(item));
    return items[0] || undefined;
  }
}
