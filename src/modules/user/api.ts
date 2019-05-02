import { client } from "../../utils/client";
import { User } from "./types";

type CreateResponse = {
  user: User;
};

export const create = (email: string, password: string) =>
  client.post<CreateResponse>(
    `/users/login`,
    JSON.stringify({
      user: {
        email,
        password
      }
    })
  );
