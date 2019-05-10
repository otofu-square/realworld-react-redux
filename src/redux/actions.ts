import { RouterAction } from "connected-react-router";
import { ArticlesActions } from "~/modules/articles";
import { UserActions } from "~/modules/user";

export type ReduxAction = ArticlesActions | UserActions | RouterAction;
