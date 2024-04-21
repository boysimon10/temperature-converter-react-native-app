import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from "./Button.style";

export default function Button() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Convertir en °C</Text>
            </TouchableOpacity>
        </View>
    );
}