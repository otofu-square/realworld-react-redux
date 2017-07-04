import { Author } from './author';

export interface Article {
  author: Author;
  tagList: Array<string>;
  title: string;
  body: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
}
