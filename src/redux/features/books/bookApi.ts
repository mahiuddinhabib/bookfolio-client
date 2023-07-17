import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (filters) => ({
        url: "/books",
        params: filters,
      }),
    }),
    singleBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }),
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
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/reviews/${id}`,
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
  useEditBookMutation
} = bookApi;
