import { Actions } from "./actions";
import { State } from "./reducer";
import { Article } from "./types";

export type ArticlesActions = Actions;
export type ArticlesState = State;
export type Article = Article;

export { actions as articlesActions } from "./actions";
export { reducer as articlesReducer } from "./reducer";
export { operations as articlesOperations } from "./operations";
