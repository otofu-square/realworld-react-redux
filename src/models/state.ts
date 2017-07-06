import { RouterState } from 'react-router-redux';

import { Article } from './article';
import { User } from './user';

export interface appInfoState {
  appName: string;
  token: string;
}

export interface articleListState {
  articles: Array<Article> | null;
}

export interface authState {
  email: string;
  password: string;
  isAuthenticated: boolean;
  currentUser: User | null;
  errors: Array<any>;
}

export interface GlobalState {
  appInfo: appInfoState;
  articleList: articleListState;
  auth: authState;
  router: any;
}
