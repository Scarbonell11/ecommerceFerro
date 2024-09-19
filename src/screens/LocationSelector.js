import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";

const LocationSelector = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    address: "",
  });

  //react no admite escribir asincronia directamente dentro de un useeffect
  //por eso utilizamos una funcion de ejecucion instantanea ()() de esta manera si lo permite

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
      const newLocation = await Location.getCurrentPositionAsync();
      setLocation({
        ...location,
        latitude: newLocation.coords.latitude,
        longitude: newLocation.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapPreview location={location} />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
