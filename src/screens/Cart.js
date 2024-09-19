import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { usePostOrderMutation } from "../services/orders";
import EmptyCart from "../components/EmptyCart";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerPostOrderMutation] = usePostOrderMutation();
  const dispatch = useDispatch();
  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      ...cart,
      createdAt,
    };
    triggerPostOrderMutation({ localId, order });
    dispatch(clearCart());
    navigation.navigate("OrderStack");
  };

  if (cart.total === 0) return <EmptyCart text={"Su carrito esta vacio"} />;
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.item}
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <View style={styles.buttons}>
        <Pressable onPress={handleAddOrder} style={styles.confirmButton}>
          <Text style={styles.text}>Confirmar</Text>

          <Text style={styles.text}>{cart.total}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  confirmButton: {
    padding: 10,
    backgroundColor: colors.lightOrange,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 20,
  },
});
