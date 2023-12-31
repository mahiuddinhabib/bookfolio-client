import { api } from "@/redux/api/apiSlice";
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
      transformResponse: (response:any) => {
        const accessToken = response.data.accessToken;
        const id = response.data.id;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("id", id);
        return response;
      },
    }),
    addToWishlist: builder.mutation({
      query: (data) => ({
        url: `/users/wish-list`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    getWishlist: builder.query({
      query: (id) => ({
        url: `/users/wish-list/${id}`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["wishlist"],
    }),
    addTotoRead: builder.mutation({
      query: (data) => ({
        url: `/users/to-read`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["toRead"],
    }),
    updateIsFinished: builder.mutation({
      query: (data) => ({
        url: `/users/to-read`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["toRead"],
    }),
    getToRead: builder.query({
      query: (id) => ({
        url: `/users/to-read/${id}`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["toRead"],
    }),
    /* getUsers: builder.query({
      query: (filters) => ({
        url: "/users",
        params: filters,
      }),
    }), 
    singleUser: builder.query({
      query: (id) => `/users/${id}`,
    }),*/
  }),
});

export const {
  // useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useAddToWishlistMutation,
  useAddTotoReadMutation,
  useUpdateIsFinishedMutation,
  useGetToReadQuery,
  useGetWishlistQuery,
  // useSingleUserQuery,
} = userApi;
