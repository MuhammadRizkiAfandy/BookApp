import { StyleSheet, View, Image,  } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text,TextInput, TouchableOpacity } from 'react-native';

export default function Registrasi () {
  const [yourname, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  
  return(
    <SafeAreaView style={{backgroundColor: '#252525', flex:1}}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingHorizontal: 10,
        }}> 
        
        <View style={style.container}>
          <Image
            source={require('./src/book.png')}
            style={{ width: 350, height: 150 }}
          />
        </View>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold',marginHorizontal:30 }}>
          Create Account
        </Text>

        <Text style={{color: 'white', fontSize: 15,marginHorizontal:25,paddingTop:10}}>
          <Text>Nama</Text>
        </Text>
        <TextInput
          value={yourname}
          //keyboardType='name-address'
          onChangeText={text => setName(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: '#d8bfd8',
            marginTop: 5,
            borderRadius: 9,
            elevation: 2,
            paddingLeft:10,
          }}
          placeholder="Masukkan Nama Anda"
        />

        <Text style={{color: 'white', fontSize: 15,marginHorizontal:25,paddingTop:10}}>
          <Text>Email</Text>
        </Text>
        <TextInput
          value={email}
          keyboardType='email-address'
          onChangeText={text => setEmail(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: '#d8bfd8',
            marginTop: 5,
            borderRadius: 9,
            elevation: 2,
            paddingLeft:10,
          }}
          placeholder="Masukkan Email Anda"
        />
        
        <Text style={{color: 'white', fontSize: 15,marginHorizontal:25,paddingTop:10}}>
          <Text>Password</Text>
        </Text>
        <TextInput
          value={password}
          keyboardType='email-address'
          onChangeText={text => setPassword(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: '#d8bfd8',
            marginTop: 5,
            borderRadius: 9,
            elevation: 2,
            paddingLeft:10,
          }}
          placeholder="Masukkan Password Anda"
          secureTextEntry={true}
        />



        <Text style={{color: 'white', fontSize: 15,marginHorizontal:25,paddingTop:10}}>
          <Text>Re-password</Text>
        </Text>
        <TextInput
          value={repassword}
          keyboardType='email-address'
          onChangeText={text => setRepassword(text)}
          style={{
            marginHorizontal: 20,
            backgroundColor: '#d8bfd8',
            marginTop: 5,
            borderRadius: 9,
            elevation: 2,
            paddingLeft:10,
          }}
          placeholder="Masukkan Re-Password Anda"
          secureTextEntry={true}
        />
        
        <TouchableOpacity
          style={{
            marginTop: 25,
            backgroundColor: '#ba55d3',
            marginHorizontal: 10,
            marginVertical:20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 9,
          }}>

          <Text style={{ color: '#f8f8ff', fontSize: 25, fontWeight: 'bold'}}>
            Create Account
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 15,marginHorizontal:30 }}>
          <Text>Already have an account?</Text>{'\n'}
        </Text>
        <Text style={{color: 'white', fontSize: 15,marginHorizontal:30}}>
          <Text>Log In disini!</Text>
        </Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    height: 55,
    backgroundColor: '#dda0dd',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: 'white',
  },
  underlineTextStyle: {
    textDecorationLine: 'underline',
  },
});