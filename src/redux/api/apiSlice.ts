import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://localhost:5000/",
    baseUrl: "https://eyeglass-backend-3.vercel.app/",
  }),
  tagTypes: ["eyeglass"],
  endpoints: () => ({}),
});
