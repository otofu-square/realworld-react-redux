import { AxiosResponse } from 'axios';
import { client } from '@/utils/client';
import { User } from './types';

export type CreateResponse = AxiosResponse<{
  user: User;
}>;

export const create = (email: string, password: string) =>
  client.post<CreateResponse>(
    `/users/login`,
    JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  );
