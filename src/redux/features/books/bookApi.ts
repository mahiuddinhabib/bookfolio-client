import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (filters) => ({
        url: "/books",
        params: filters,
      }),
      providesTags: ["update"],
    }),
    singleBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["reviews"],
    }),
    addBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
        method: "POST",
        body: data,
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/reviews/${id}`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: (id) => `/books/reviews/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetReviewQuery,
  useGetBooksQuery,
  usePostReviewMutation,
  useSingleBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useLazySingleBookQuery,
} = bookApi;
