import { Actions } from "./actions";
import { State } from "./reducer";
import { User } from "./types";

export type UserActions = Actions;
export type UserState = State;
export type User = User;

export { actions as userActions } from "./actions";
export { reducer as userReducer } from "./reducer";
export { operations as userOperations } from "./operations";
