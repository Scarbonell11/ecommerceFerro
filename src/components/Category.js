import { Pressable, StyleSheet, Text } from "react-native";
import ShadowWrapper from "./ShadowWrapper";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";

const Category = ({ item }) => {
  //el hook funciona si esta anidado en una de las pantallas
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Products", { category: item })}
    >
      <ShadowWrapper style={styles.container}>
        <Text style={styles.containerText}> {item} </Text>
      </ShadowWrapper>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: "20%",
    borderRadius: 10,
    backgroundColor: colors.lightOrange,
    marginVertical: "2%",
    padding: 30,
  },
  containerText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "oswald",
  },
});
