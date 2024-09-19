import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={() => navigation.navigate("Detail", { id: item.id })}
      style={styles.container}
    >
      <Text style={width < 300 ? styles.titleMin : styles.title}>
        {" "}
        {item.title}{" "}
      </Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }} //Cuando es con una ruta absoluta va asi
      />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
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
