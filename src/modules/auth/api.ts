import { AxiosResponse } from 'axios';

import { client } from '../../utils/client';
import { User } from './types';

export type LoginResponse = AxiosResponse<{
  user: User;
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
