import { api } from "../../api/apiSlice";

const salesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSales: builder.query({
      query: () => ({
        url: "api/v1/salesManagement",
        method: "GET",
      }),
      providesTags: ["eyeglass"],
    }),

    postSales: builder.mutation({
      query: (data) => ({
        url: "api/v1/salesManagement/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["eyeglass"],
    }),
  }),
});

export const { useGetAllSalesQuery, usePostSalesMutation } = salesApi;
