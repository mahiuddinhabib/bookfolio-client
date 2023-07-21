import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookfolio-backend.vercel.app/api/v1",
  }),
  tagTypes: ["reviews", "update", "delete", "toRead", "wishlist"],
  endpoints: () => ({}),
});
