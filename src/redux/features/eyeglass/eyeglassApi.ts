import { IEyeGlass } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";

const eyeglassApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEyeGlass: builder.query({
      query: () => ({
        url: "api/v1/eyeglass",
        method: "GET",
      }),
      providesTags: ["eyeglass"],
    }),
    getSingleEyeGlass: builder.query({
      query: (id) => ({
        url: `api/v1/eyeglass/${id}`,
        method: "GET",
      }),
      providesTags: ["eyeglass"],
    }),
    postEyeGlass: builder.mutation({
      query: (data) => ({
        url: "api/v1/eyeglass/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["eyeglass"],
    }),

    updateEyeGlass: builder.mutation({
      query: (eyeglass: IEyeGlass) => {
        const { id, ...rest } = eyeglass;
        console.log("up-id", id);
        return {
          url: `api/v1/eyeglass/${id}`,
          method: "PATCH",
          body: rest,
        };
      },
      invalidatesTags: ["eyeglass"],
    }),

    deleteEyeGlass: builder.mutation({
      query: (id) => ({
        url: `api/v1/eyeglass/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["eyeglass"],
    }),
  }),
});

export const {
  useGetEyeGlassQuery,
  useGetSingleEyeGlassQuery,
  usePostEyeGlassMutation,
  useUpdateEyeGlassMutation,
  useDeleteEyeGlassMutation,
} = eyeglassApi;
