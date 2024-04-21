import { ImageBackground, Text, View } from "react-native";
import { styles } from "./App.style";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display"
import hotBackground from "./assets/cold.png";

export default function App() {
  
  return (
    <ImageBackground source={hotBackground} style={styles.container}>
      <View style={styles.workspace}>
        <Display />
        <Input />
        <View>
          <Button />
        </View>
      </View>
    </ImageBackground>
  );
}
