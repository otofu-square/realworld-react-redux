import { RouterAction } from "connected-react-router";
import { ArticleActions } from "../modules/article";
import { UserActions } from "../modules/user";

export type ReduxAction = ArticleActions | UserActions | RouterAction;
