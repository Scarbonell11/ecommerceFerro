import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url_firebase } from "../firebase/database";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: url_firebase }),
  // etiqueta de referencia para indicarle a redux que realice el get del usuario cuando actualizo la imagen
  //lo mismo para las ordenes
  tagTypes: ["order"],
  endpoints: (builder) => ({
    getOrderByUser: builder.query({
      query: ({ localId, orderId }) => `/orders/${localId}/${orderId}.json`,
      providesTags: ["order"],
    }),
    getOrders: builder.query({
      query: (localId) => `/orders/${localId}.json`,
      transformResponse: (response) => {
        if (!response) return [];
        const data = Object.entries(response).map((item) => ({
          id: item[0],
          ...item[1],
        }));
        return data;
      },
      providesTags: ["order"],
    }),
    postOrder: builder.mutation({
      query: ({ order, localId }) => ({
        url: `/orders/${localId}.json`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

//Object.value(response) transforma todos los valores que vienen como objeto en un array
// hacemos esto porque es necesario para recorrer los prodcutos con un flatlist que sea un array
//Object.entries(response) Transforma los valores en un array sin perder la id
//generada por firebase, que necesitamos para identificar a cada item
export const {
  usePostOrderMutation,
  useGetOrdersQuery,
  useGetOrderByUserQuery,
} = ordersApi;
