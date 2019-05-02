import { RouterAction } from "connected-react-router";
import { ArticleAction } from "../modules/article";
import { UserAction } from "../modules/user";

export type ReduxAction = ArticleAction | UserAction | RouterAction;
