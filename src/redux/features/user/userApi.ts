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
        localStorage.setItem("accessToken", accessToken);
        console.log(response);
        return response;
      },
    }),
    addToWishlist: builder.mutation({
      query: ( data ) => ({
        url: `/users/wish-list`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
        method: "POST",
        body: data,
      }),
    }),
    addTotoRead: builder.mutation({
      query: ( data ) => ({
        url: `/users/to-read`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
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
  useLoginUserMutation,
  useAddToWishlistMutation,
  useAddTotoReadMutation
  // useSingleUserQuery,
} = userApi;
