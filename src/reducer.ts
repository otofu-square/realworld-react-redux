import { combineReducers } from "redux";
import { routerReducer, RouterState } from "react-router-redux";
import { articleReducer, ArticleState } from "./modules/article";
import { userReducer, UserState } from "./modules/user";

export type ReduxState = {
  article: ArticleState;
  user: UserState;
  router: RouterState;
};

export const rootReducer = combineReducers<ReduxState>({
  article: articleReducer,
  user: userReducer,
  router: routerReducer
});
