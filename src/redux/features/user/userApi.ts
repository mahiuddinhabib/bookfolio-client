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
    loginUser: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      // Handle the response from the login API
      transformResponse: (response) => {
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        console.log(response);
        return response;
      },
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
  useLoginUserMutation
  // useSingleUserQuery,
} = userApi;
