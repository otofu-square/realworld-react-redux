import { Article } from './article';

export interface appInfoState {
  appName: string;
}

export interface articleListState {
  articles: Array<Article> | null;
}

export interface authState {
  email: string | null;
  password: string | null;
  isAuthenticated: boolean;
}

export interface GlobalState {
  appInfo: appInfoState;
  articleList: articleListState;
  auth: authState;
}
