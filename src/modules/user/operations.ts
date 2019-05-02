import * as api from "./api";
import { actions } from "./actions";
import { ThunkAction } from "../../redux";

type CreateProps = { email: string; password: string };

type Create = (_: CreateProps) => ThunkAction<Promise<void>>;
const create: Create = ({ email, password }) => async dispatch => {
  try {
    dispatch(actions.startLoading());
    const response = await api.create(email, password);
    dispatch(actions.createSuccess(response.user));
  } catch (e) {
    // @ts-ignore
  } finally {
    dispatch(actions.stopLoading());
  }
};

export const operations = {
  create
};
