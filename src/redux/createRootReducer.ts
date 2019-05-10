import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { articlesReducer, ArticlesState } from "~/modules/articles";
import { userReducer, UserState } from "~/modules/user";

export type ReduxState = {
  article: ArticlesState;
  user: UserState;
  router: RouterState;
};

export const createRootReducer = (history: History) =>
  combineReducers<ReduxState>({
    article: articlesReducer,
    user: userReducer,
    router: connectRouter(history)
  });
