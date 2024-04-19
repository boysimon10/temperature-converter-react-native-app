import { TextInput, View, Text } from "react-native";
import styles from "./Input.style";

export default function Input() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Température"
        keyboardType="numeric"
        maxLength={4}
        
      />
      <Text style={styles.unit}>°F</Text>
    </View>
  );
}
