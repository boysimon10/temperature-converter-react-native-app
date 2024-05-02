import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.style";

export default function Button({ setUnit, unit }) {
  const buttonText = unit === "Celsius" ? "Convert to °F" : "Convert to °C";

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setUnit(unit === "Celsius" ? "Fahrenheit" : "Celsius")}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
