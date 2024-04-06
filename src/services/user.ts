import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface UserData {
  id?: string;
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://172.16.93.115:3000/'}),
  endpoints: builder => ({
    signup: builder.mutation<UserData, Partial<UserData>>({
      query: userData => ({
        url: 'user',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const {useSignupMutation} = userApi;
