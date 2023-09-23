import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getlinkedAPI = createApi({
  reducerPath: "getlinkedAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.getlinked.ai/" }),
  credentials: "include",
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (formData) => ({
        url: "hackathon/registration",
        method: "POST",
        body: formData,
      }),
    }),

    submitContact: builder.mutation({
      query: (formData) => ({
        url: "hackathon/contact-form",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = getlinkedAPI;
export default getlinkedAPI;
