import { AxiosResponse } from 'axios';

import { client } from '../../utils/client';

export type LoginResponse = AxiosResponse<{
  user: {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    bio: string | null;
    image: string | null;
    token: string;
  };
}>;

export const login = (email: string, password: string) =>
  client.post<LoginResponse>(
    `/users/login`,
    JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  );
