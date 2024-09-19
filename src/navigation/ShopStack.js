import React from "react";
import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";
import ItemDetail from "../screens/ItemDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              title={
                route.name === "Home"
                  ? "Ferro Store"
                  : route.name === "Products"
                  ? route.params.category
                  : "Detalle del producto"
              }
            />
          ),
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={ItemListCategories} />
      <Stack.Screen name="Detail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
