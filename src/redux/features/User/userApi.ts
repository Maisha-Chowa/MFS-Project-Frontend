import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
    }),

    postNewUser: builder.mutation({
      query: ({ data }) => ({
        url: "/user/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["eyeglass"],
    }),
  }),
});

export const { usePostNewUserMutation, useGetUsersQuery } = userApi;
