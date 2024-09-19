import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url_firebase } from "../firebase/database";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: url_firebase }),
  // etiqueta de referencia para indicarle a redux que realice el get del usuario cuando actualizo la imagen
  //lo mismo para las ordenes
  tagTypes: ["userImage"],
  endpoints: (builder) => ({
    patchImageProfile: builder.mutation({
      query: ({ image, localId }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: { image },
      }),
      invalidatesTags: ["userImage"],
    }),

    getUser: builder.query({
      query: ({ localId }) => `/users/${localId}.json`,
      transformResponse: (response) => {
        if (!response) return { image: "" };
        if (!response.image) response.image = "";
        return {
          ...response,
        };
      },
      providesTags: ["userImage"],
    }),
  }),
});

//Object.value(response) transforma todos los valores que vienen como objeto en un array
// hacemos esto porque es necesario para recorrer los prodcutos con un flatlist que sea un array
//Object.entries(response) Transforma los valores en un array sin perder la id
//generada por firebase, que necesitamos para identificar a cada item
export const { usePatchImageProfileMutation, useGetUserQuery } = usersApi;
