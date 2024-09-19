import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const EmptyCart = ({ text }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerMessage}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.text}>¡ {text} !</Text>
          <Text style={styles.textButton}>Continuar comprando</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerMessage: {
    padding: 10,
  },
  text: {
    fontFamily: "roboto",
    fontSize: 18,
  },
  textButton: {
    fontSize: 18,
    fontFamily: "roboto",
    textDecorationLine: "underline",
  },
});
