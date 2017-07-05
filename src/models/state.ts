import { Article } from './article';

export interface appInfoState {
  appName: string;
}

export interface articleListState {
  articles: Array<Article> | null;
}

export interface GlobalState {
  appInfo: appInfoState;
  articleList: articleListState;
}
