import { apiClient } from "../../utils/apiClient";
import { User } from "./types";

type CreateResponse = {
  user: User;
};

export const create = (email: string, password: string) =>
  apiClient
    .post(`users/signin`, {
      json: {
        user: {
          email,
          password
        }
      }
    })
    .json<CreateResponse>();
