import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSession } from "../db";
import { setUser } from "../features/auth/authSlice";

const MainNavigator = () => {
  useEffect(() => {
    //funcion autoinvocada para poder usar async dentro del useffect ()()
    (async () => {
      const sessions = await fetchSession();
      if (sessions.rows.length) {
        dispatch(setUser(sessions.rows._array[0]));
      }
    })();
  }, []);

  const dispatch = useDispatch();

  const idToken = useSelector((state) => state.auth.idToken);

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
