import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store/store';
import { login, logout, refreshTokens } from '../slice/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string; refreshToken: string }, // response data model, data na nakukuha mo from backend
      { username: string; password: string } // arguments data model, data na binabato mo sa backend
    >({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(login(data));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(logout());
        } catch (error) {
          console.error('Logout failed:', error);
        }
      },
    }),
    refresh: builder.mutation<
      { accessToken: string; refreshToken: string },
      { token: string }
    >({
      query: ({ token }) => ({
        url: 'refresh',
        method: 'POST',
        body: { token },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(refreshTokens(data));
        } catch (error) {
          console.error('Token refresh failed:', error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshMutation } =
  authApi;
