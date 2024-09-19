import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../global/colors";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (t) => {
    setInput(t);
  };

  const handleRemoveInput = () => {
    setInput("");
    setError("");
    onSearch("");
  };

  const search = () => {
    const regex = /[^a-zA-Z0-9\s]/;
    if (regex.test(input)) {
      setError("No utilice caracteres especiales en su busqueda");
    } else {
      setError("");
      onSearch(input);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor="black"
          placeholder="Buscar..."
          value={input}
          onChangeText={handleInputChange}
          style={styles.input}
        />
        <View style={styles.containerButtons}>
          <Pressable onPress={search}>
            <AntDesign name="search1" size={24} color="black" />
          </Pressable>
          <Pressable onPress={handleRemoveInput}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <Text> {error} </Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    margin: "2%",
    borderRadius: 10,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
