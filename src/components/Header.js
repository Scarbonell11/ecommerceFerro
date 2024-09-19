import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "../global/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { deleteSession } from "../db";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/auth/authSlice";

const Header = ({ title }) => {
  const idToken = useSelector((state) => state.auth.idToken);
  dispatch = useDispatch();

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{title} </Text>

      {idToken && (
        <Pressable onPress={onLogout} style={styles.logout}>
          <MaterialIcons name="logout" size={24} color="black" />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkOrange,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
  },
  containerText: { fontSize: 20, fontFamily: "roboto" },

  logout: {
    position: "absolute",
    right: 20,
  },
});
