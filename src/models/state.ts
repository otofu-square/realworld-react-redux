import { Article } from './article';

export interface appInfoState {
  appName: string;
}

export interface articleListState {
  articles: Array<Article> | null;
}

export interface authState {
  email: string;
  password: string;
  isAuthenticated: boolean;
  errors: Array<any>;
}

export interface GlobalState {
  appInfo: appInfoState;
  articleList: articleListState;
  auth: authState;
}
