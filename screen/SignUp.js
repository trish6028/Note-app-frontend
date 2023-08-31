import { View, TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet, ImageBackground, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import baseUrl from '../common/url.js'
export default function SignUp( {navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');


  const handleSignUp = async () => {
    if (password !== reEnterPassword) {
      Alert.alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.message === 'Signup successful') {
        alert('Signup successful. You can now log in.');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <ImageBackground source={require('./assets/7722074368.png')} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Sign up</Text>
          <Image style={styles.icon} source={require('./assets/signin.png')}></Image>
        </View>

        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
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
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Re-Enter Password"
            placeholderTextColor="white"
            value={reEnterPassword}
            onChangeText={setReEnterPassword}

          />
        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          
          <TouchableOpacity onPress={handleSignUp} style={styles.button}  >
            <Text style={{ color: 'white', fontSize: 28, position: 'relative', top: 14, fontFamily: 'LilitaOne-Regular' }}>Sign up</Text>
          </TouchableOpacity>
          <Text>I'm already a member</Text><TouchableOpacity  onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize:22 ,   color:'black', fontFamily: 'LilitaOne-Regular', marginBottom: 20, }}>log in</Text>
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
    marginTop: 40

  },

  icon: {
    justifyContent: 'center',
    height: 80,
    width: 80,
    position: 'relative',
    top: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',  
    borderRadius: 8,
    padding: 10,
    width: '88%',
    color: 'white',  
    marginTop: 14,
    fontSize: 18,
  },
  button: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#824FD6',
    height: 60,
    width: 250,
    alignSelf: 'center',
    elevation: 7,
    marginBottom: 30,

  },

});

