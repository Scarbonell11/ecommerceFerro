import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";

//Como home es una pantalla recibe propiedades de la navegacion navigation y toute
const Home = () => {
  return (
    <View>
      <Categories />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
