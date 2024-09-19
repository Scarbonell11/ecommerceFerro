import { StyleSheet, View } from "react-native";

const ShadowWrapper = ({ children, style }) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

export default ShadowWrapper;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
