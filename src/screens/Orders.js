import { StyleSheet, Text, View, FlatList } from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersQuery } from "../services/orders";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyCart from "../components/EmptyCart";

const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);

  const { data: orders, isLoading } = useGetOrdersQuery(localId);

  if (isLoading) return <LoadingSpinner />;
  if (orders.length === 0)
    return <EmptyCart text={"No posee ordenes generadas"} />;
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem item={item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
