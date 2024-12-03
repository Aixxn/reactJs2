import { Text, ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';


export default function Splash() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./image/splash_bg.png')}
        style={styles.image}
      >
        <Text style={styles.text}>splash</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

