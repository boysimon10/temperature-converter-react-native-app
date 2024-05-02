import React from "react";
import { Text } from "react-native";
import styles from "./Display.style";

export default function Display({ temperature, unit }) {
  const premiereLettre = unit.charAt(0);
  return (
    <Text style={styles.text}>
      {temperature.toFixed(1)}°{premiereLettre}
    </Text>
  );
}
