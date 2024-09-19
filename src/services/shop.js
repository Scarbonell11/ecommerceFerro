import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url_firebase } from "../firebase/database";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: url_firebase }),
  // etiqueta de referencia para indicarle a redux que realice el get del usuario cuando actualizo la imagen
  //lo mismo para las ordenes
  tagTypes: ["userImage"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories.json",
    }),
    getProducts: builder.query({
      query: (category) =>
        `/products.json?orderBy="category"&equalTo="${category}" `,
      transformResponse: (response) => {
        const data = Object.values(response);
        return data;
      },
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}.json`,
    }),
  }),
});

//Object.value(response) transforma todos los valores que vienen como objeto en un array
// hacemos esto porque es necesario para recorrer los prodcutos con un flatlist que sea un array
//Object.entries(response) Transforma los valores en un array sin perder la id
//generada por firebase, que necesitamos para identificar a cada item
export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductQuery,
} = shopApi;
