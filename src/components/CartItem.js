import { StyleSheet, Text, View, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../global/colors";
const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.brand}> {item.brand} </Text>
        <Text style={styles.text}> $ {item.price} </Text>
      </View>
      <Pressable>
        <AntDesign name="delete" size={40} color="black" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    margin: "5%",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightOrange,
  },

  containerText: {
    gap: 3,
  },

  title: {
    width: "80%",
    fontSize: 17,
    color: "white",
  },
  brand: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    color: "white",
  },
});
