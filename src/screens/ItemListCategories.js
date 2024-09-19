import { FlatList, StyleSheet, Text } from "react-native";
import { useGetProductsQuery } from "../services/shop";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import LoadingSpinner from "../components/LoadingSpinner";

//route es una propiedad de navegacion de la cual extraemos los parametros que le pasamos al boton
//desestructurandola y accediendo a ellos en este caso a category
const ItemListCategories = ({ route }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const { category } = route.params;

  const {
    data: products,
    isSuccess,
    isLoading,
  } = useGetProductsQuery(category);

  useEffect(() => {
    if (isSuccess) {
      setProductsFiltered(products);
    }
  }, [category, isSuccess]);

  const onSearch = (input) => {
    if (input) {
      setProductsFiltered(
        productsFiltered.filter((product) => product.title.includes(input))
      );
    } else {
      setProductsFiltered(products);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Search onSearch={onSearch} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
