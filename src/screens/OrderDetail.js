import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetOrderByUserQuery } from "../services/orders";
import OrderView from "../components/OrderView";
import LoadingSpinner from "../components/LoadingSpinner";
import { colors } from "../global/colors";

const OrderDetail = ({ route }) => {
  const { id } = route.params;
  const localId = useSelector((state) => state.auth.localId);
  const {
    data: order,
    isError,
    isLoading,
  } = useGetOrderByUserQuery({
    localId,
    orderId: id,
  });

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text>
          Error al obtener la orden. Por favor, inténtalo de nuevo más tarde.
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={order.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderView item={item} />}
      />
      <View style={styles.total}>
        <Text style={styles.text}> $ {order.total}</Text>
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  total: {
    padding: 10,
    backgroundColor: colors.lightOrange,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: { fontSize: 20 },
});
