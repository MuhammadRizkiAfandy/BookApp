import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.readbook} source={require('./assets/readbook.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74068F",
    alignItems:'center', 
    justifyContent:'center',
  },
  readbook: {
    width: 300, height: 300,
  },

});

export default Splash;