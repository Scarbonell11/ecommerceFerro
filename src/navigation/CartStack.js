import React from "react";

import Header from "../components/Header";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          header: () => <Header title="Carrito" />,
        };
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
