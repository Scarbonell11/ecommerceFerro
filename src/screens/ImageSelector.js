import { Image, StyleSheet, Text, View } from "react-native";
import SubmitButton from "../components/SubmitButton";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { usePatchImageProfileMutation } from "../services/users";
import { useSelector } from "react-redux";

const ImageSelector = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const [image, setImage] = useState("");
  const [triggerAddImageProfile] = usePatchImageProfileMutation();

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) return;
    const result = await ImagePicker.launchCameraAsync({
      aspect: [9, 9], // 9 partes de ancho por 9 de alto
      quality: 0.2, //calidad
      allowsEditing: true, //permite recortar la imagen
      base64: true, //forma para guardar imagenes como string
    });
    if (result.canceled) return;

    setImage("data:image/jpg;base64," + result.assets[0].base64);
  };

  const confirmImage = () => {
    triggerAddImageProfile({ image, localId });
    navigation.navigate("MyProfile");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={
          image ? { uri: image } : require("../../assets/userdefault.jpg")
        }
      />
      <SubmitButton title={"Tomar foto"} onPress={pickImage} />
      <SubmitButton title={"Confirmar"} onPress={confirmImage} />
    </View>
  );
};

export default ImageSelector;

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
