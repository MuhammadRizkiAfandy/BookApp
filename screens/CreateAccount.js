import { StyleSheet, View, Image,  } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text,TextInput, TouchableOpacity, Button} from 'react-native';

export default function Registrasi ({navigation}) {
  const [yourname, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  
  return(
    <SafeAreaView style={{backgroundColor: '#252525', flex:1}}>
      <ScrollView contentContainerStyle={{paddingTop: 30, paddingHorizontal: 10}}>
        <View style={style.container}>
          <Image
            source={require('../assets/images/readbook.png')}
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
          style={style.inputContainer}
          placeholder="Masukkan Nama Anda"
        />

        <Text style={{color: 'white', fontSize: 15,marginHorizontal:25,paddingTop:10}}>
          <Text>Email</Text>
        </Text>
        <TextInput
          value={email}
          keyboardType='email-address'
          onChangeText={text => setEmail(text)}
          style={style.inputContainer}
          placeholder="Masukkan Email Anda"
        />
        
        <Text style={{color: 'white', fontSize: 15,marginHorizontal:25,paddingTop:10}}>
          <Text>Password</Text>
        </Text>
        <TextInput
          value={password}
          keyboardType='email-address'
          onChangeText={text => setPassword(text)}
          style={style.inputContainer}
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
          style={style.inputContainer}
          placeholder="Masukkan Re-Password Anda"
          secureTextEntry={true}
        />
        <TouchableOpacity style={{paddingTop:30}}>
          <Button color='#75407D' title="Create Account" onPress={()=> navigation.navigate('Root')}/>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 15,marginHorizontal:30, paddingTop:15}}>
          <Text>Already have an account?</Text>{'\n'}
        </Text>
        <Text style={{color: 'white', fontSize: 15,marginHorizontal:30}}>
          <Text>Log In disini!</Text>
        </Text>
    </ScrollView>
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
    marginHorizontal: 20,
    backgroundColor: '#d8bfd8',
    marginTop: 5,
    borderRadius: 9,
    paddingLeft:10,
  },
});