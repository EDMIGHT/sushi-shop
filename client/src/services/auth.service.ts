import { IResponseUser } from '@/types/response.types';
import { ILoginUser, IRegisterUser } from '@/types/user.types';

import { api } from './api';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponseUser, ILoginUser>({
      query: ({ ...body }) => ({
        url: 'auth/signIn',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    register: builder.mutation<IResponseUser, IRegisterUser>({
      query: ({ ...body }) => ({
        url: 'auth/signUp',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    authMe: builder.query<IResponseUser, null>({
      query: () => ({
        url: 'auth/me',
        credentials: 'include',
      }),
    }),
    logout: builder.mutation<undefined, null>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useLoginMutation, useAuthMeQuery, useLogoutMutation, useRegisterMutation } =
  authApi;
