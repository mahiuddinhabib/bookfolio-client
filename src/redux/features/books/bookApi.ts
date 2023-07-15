import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),
    getReview: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ['reviews'],
    }),
  }),
});

export const {
  useGetReviewQuery,
  useGetBooksQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} = bookApi;
