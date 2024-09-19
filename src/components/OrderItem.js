import { StyleSheet, Text, View, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";

const OrderItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.createdAt}</Text>
        <Text style={styles.text}> $ {item.total} </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("OrderDetail", { id: item.id })}
      >
        <AntDesign name="search1" size={25} color="black" />
      </Pressable>
    </View>
  );
};

export default OrderItem;

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
    gap: 5,
  },

  title: {
    fontSize: 20,
    color: "white",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
