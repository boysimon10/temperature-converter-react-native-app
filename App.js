import React, { useState } from "react";
import { ImageBackground, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "./App.style";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";

export default function App() {
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState("Celsius");

  const convertTemperature = () => {
    if (unit === "Celsius") {
      return (temperature * 9) / 5 + 32; // Celsius to Fahrenheit
    } else {
      return ((temperature - 32) * 5) / 9; // Fahrenheit to Celsius
    }
  };

  const isIceTemperature = (value, unit) => {
    if (unit === "Celsius") {
      return value <= 0;
    } else {
      return value <= 32;
    }
  };

  const backgroundImage = isIceTemperature(convertTemperature(), unit)
    ? coldBackground
    : hotBackground;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={backgroundImage} style={styles.container}>
        <View style={styles.workspace}>
          <Display
            temperature={convertTemperature()}
            unit={unit === "Celsius" ? "Fahrenheit" : "Celsius"}
          />
          <Input
            temperature={temperature}
            setTemperature={setTemperature}
            unit={unit}
            setUnit={setUnit}
          />
          <Button setUnit={setUnit} unit={unit} />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
