import { StyleSheet, View, Image, SafeAreaView, ScrollView, Text,TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, {useState } from 'react'
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">
      <SafeAreaView>
      <ScrollView>
      <View >
        <Image style={styles.readbook} source={require('../assets/images/readbook.png')} />
    
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('Root')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       
      </View>
      </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2B2B2D'
  },
  input: {
    backgroundColor: '#CFB4CD',
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  readbook: {
    width: 300, height: 300,
  },
})
        
