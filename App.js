import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Temperature converter</Text>
      <StatusBar style="auto" />
    </View>
  );
}