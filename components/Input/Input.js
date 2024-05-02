import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./Input.style";

export default function Input({ temperature, setTemperature, unit, setUnit }) {
  const handleChange = (text) => {
    if (!isNaN(parseFloat(text)) && isFinite(text)) {
      setTemperature(parseFloat(text));
    } else if (text === "") {
      setTemperature(0);
    }
  };
  

  const premiereLettre = unit.charAt(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={temperature.toString()}
        onChangeText={handleChange}
      />
      <Text
        style={styles.unit}
        onPress={() => setUnit(unit === "Celsius" ? "Fahrenheit" : "Celsius")}
      >
        °{premiereLettre}
      </Text>
    </View>
  );
}
