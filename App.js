import { ImageBackground, Text, View } from "react-native";
import { styles } from "./App.style";
import Input from "./components/Input/Input";
import hotBackground from "./assets/hot.png";

export default function App() {
  return (
    <ImageBackground source={hotBackground} style={styles.container}>
      <View style={styles.workspace}>
        <View>
          <Text>Partie 1</Text>
        </View>
        <Input />
        <View>
          <Text>Partie 3</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
