import { Actions } from "./actions";
import { State } from "./reducer";
import { Article } from "./types";

export type ArticleActions = Actions;
export type ArticleState = State;
export type Article = Article;

export { actions as articleActions } from "./actions";
export { reducer as articleReducer } from "./reducer";
export { operations as articleOperations } from "./operations";
