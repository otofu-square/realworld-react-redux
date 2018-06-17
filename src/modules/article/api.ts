import { AxiosResponse } from 'axios';
import { client } from '@/utils/client';
import { Article } from './types';

export type GetResponse = AxiosResponse<{
  articles: Article[];
  articlesCount: number;
}>;

export const get = (limit = 10) => client.get(`/articles?limit=${limit}`);
