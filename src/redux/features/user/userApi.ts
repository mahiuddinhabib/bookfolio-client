import { api } from '@/redux/api/apiSlice';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data,
      }),
    }),
    /* getUsers: builder.query({
      query: (filters) => ({
        url: "/users",
        params: filters,
      }),
    }),
    singleUser: builder.query({
      query: (id) => `/users/${id}`,
    }), */
  }),
});

export const {
  // useGetUsersQuery,
  useRegisterUserMutation,
  // useSingleUserQuery,
} = userApi;
