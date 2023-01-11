import React from "react";
import { StyleSheet, View, Image } from "react-native";
export default function Splash() {
    return (
        <View style={styles.container}>
          <Image style={styles.readbook} source={require('../assets/images/readbook.png')} />
        </View>
      );
}

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
