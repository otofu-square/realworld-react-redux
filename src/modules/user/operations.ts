import * as api from "./api";
import { actions } from "./actions";
import { ThunkAction } from "../../redux";

type LoginProps = { email: string; password: string };

type Login = (_: LoginProps) => ThunkAction<Promise<void>>;
const login: Login = ({ email, password }) => async dispatch => {
  try {
    dispatch(actions.startLoading());
    const response = await api.login(email, password);
    dispatch(actions.loginSuccess(response.user));
  } catch (e) {
    // @ts-ignore
  } finally {
    dispatch(actions.stopLoading());
  }
};

type CreateProps = {
  username: string;
  email: string;
  password: string;
};

type Create = (_: CreateProps) => ThunkAction<Promise<void>>;
const create: Create = ({ username, email, password }) => async dispatch => {
  try {
    dispatch(actions.startLoading());
    const response = await api.create(username, email, password);
    dispatch(actions.createSuccess(response.user));
  } catch (e) {
    // @ts-ignore
  } finally {
    dispatch(actions.stopLoading());
  }
};

export const operations = {
  login,
  create
};
