import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";

const OrderView = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <Text style={width < 300 ? styles.titleMin : styles.title}>
          {item.title}
        </Text>
        <Text>
          ${item.price} x {item.quantity} unidades
        </Text>
      </View>

      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }} //Cuando es con una ruta absoluta va asi
      />
    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    marginVertical: "2%",
    marginHorizontal: "2%",
    padding: "2%",
  },
  title: { fontSize: 18, width: "80%" },
  titleMin: { fontSize: 15, width: "80%" },
  image: {
    width: 60,
    height: 60,
  },
});
