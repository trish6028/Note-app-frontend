import { View,Alert, Text, KeyboardAvoidingView, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';


export default function Login({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


const handleLoginPress = () => {
  if (username =='' && password == '') {
    Alert.alert('Login Error', 'Please enter your username and password.');
  } else if (username === '') {
    Alert.alert('Login Error', 'Please enter your username.');
  } else if (password === '') {
    Alert.alert('Login Error', 'Please enter your password.');
  } else if (username !== 'trishan' && password !== '1234') {
    Alert.alert('Login Failed', 'Your username and password are incorrect.');
  } else if (username !== 'trishan') {
    Alert.alert('Login Failed', 'Your username is incorrect.');
  } else if (password !== '1234') {
    Alert.alert('Login Failed', 'Your password is incorrect.');
  } else {
    navigation.navigate('NoteList');
  }
};



  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <ImageBackground source={require('./assets/7722074368.png')} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Log in</Text>
          <Image style={styles.icon} source={require('./assets/icons8-user-64.png')}></Image>
        </View>

        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}

          />
        </View>

        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity  onPress={handleLoginPress} style={styles.button}  >
            <Text style={{ color: 'white', fontSize: 28, position: 'relative', top: 14, fontFamily: 'LilitaOne-Regular' }}>log in</Text>
          </TouchableOpacity>
        </View>


      </ImageBackground>


    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'LilitaOne-Regular',
    fontSize: 50,
    color: 'white',
    marginTop: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: { width: 2, height: 1.2 },
    textShadowRadius: 10,
    marginTop: 50

  },

  icon: {
    justifyContent: 'center',
    height: 70,
    width: 70,
    position: 'relative',
    top: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'white', // Set the border color to white
    borderRadius: 8,
    padding: 10,
    width: '88%',
    color: 'white', // Set the text color to white
    marginTop: 45,
    fontSize: 22,
  },
  button: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#824FD6',
    height: 60,
    width: 250,
    alignSelf: 'center',
    elevation: 7,
    marginTop: 30

  },


});
 