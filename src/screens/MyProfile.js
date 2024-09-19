import { Image, StyleSheet, Text, View } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { useEffect } from "react";
import { useGetUserQuery } from "../services/users";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery({ localId });

  useEffect(() => {
    if (isSuccess) console.log(user);
    if (isError) console.log(error);
  }, [isSuccess, isError]);

  if (isLoading) return null;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={
          user.image
            ? { uri: user.image }
            : require("../../assets/userdefault.jpg")
        }
      />
      <SubmitButton
        title={"añade una foto de perfil"}
        onPress={() => navigation.navigate("ImageSelector")}
      />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  container: {
    marginTop: 70,
    alignItems: "center",
    gap: 10,
  },
});
