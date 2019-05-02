import { apiClient } from "../../utils/apiClient";
import { User } from "./types";

type LoginResponse = {
  user: User;
};

export const login = (email: string, password: string) =>
  apiClient
    .post(`users/login`, {
      json: {
        user: {
          email,
          password
        }
      }
    })
    .json<LoginResponse>();

type CreateResponse = {
  user: User;
};

export const create = (username: string, email: string, password: string) =>
  apiClient
    .post(`users`, {
      json: {
        user: {
          username,
          email,
          password
        }
      }
    })
    .json<CreateResponse>();
