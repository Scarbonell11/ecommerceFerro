import React from "react";

import Header from "../components/Header";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/Orders";
import OrderDetail from "../screens/OrderDetail";
const Stack = createNativeStackNavigator();
const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          header: () => <Header title="Ordenes" />,
        };
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
};

export default OrderStack;
