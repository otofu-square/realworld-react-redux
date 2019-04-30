import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { articleReducer, ArticleState } from "../modules/article";
import { userReducer, UserState } from "../modules/user";

export type ReduxState = {
  article: ArticleState;
  user: UserState;
  router: RouterState;
};

export const createRootReducer = (history: History) =>
  combineReducers<ReduxState>({
    article: articleReducer,
    user: userReducer,
    router: connectRouter(history)
  });
