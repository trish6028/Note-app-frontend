import { View, Alert, Text, KeyboardAvoidingView, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity , Platform} from 'react-native'
import React, { useState,useEffect } from 'react';
import TouchID from 'react-native-touch-id';
import baseUrl from '../common/url.js'

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

console.log(baseUrl);
  useEffect(() => {
    checkBiometricAvailability();
  }, []);


  const checkBiometricAvailability = async () => {
    try {
      const biometryType = await TouchID.isSupported();
      console.log('Biometric authentication available:', biometryType);
    } catch (error) {
      console.log('Biometric authentication not available:', error);
    }
  };

  const handleBiometricLogin = async () => {
    try {
      const biometryType = await TouchID.isSupported();

      if (biometryType) {
        const authConfig = {
          title: 'Authenticate to log in',
        };

        TouchID.authenticate('Use biometric to log in', authConfig)
          .then(success => {
            if (success) {
             
              handleLoginPress();
            } else {
              console.log('Biometric authentication failed');
            }
          })
          .catch(error => {
            console.log('Error during biometric authentication:', error);
          });
      } else {
        console.log('Biometric authentication not available');
      }
    } catch (error) {
      console.log('Error during biometric availability check:', error);
    }
  };

  const handleLoginPress = async () => {
    if (!username || !password) {
      Alert.alert('Login Error', 'Please enter your username and password.');
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setPassword('');
        setUsername('');
        console.log(data);

        if (response.status === 200) {
          
          Alert.alert('Login Successful', 'Welcome!');
          navigation.navigate('DrawerNav');
        } else {
          Alert.alert('Login Failed', 'Your username or password is incorrect.');
        }
      } else {
        const text = await response.text();
        Alert.alert('Login Failed', 'An error occurred. Please try again.');
      }
    } catch (error) {
      Alert.alert('Login Failed', 'An error occurred. Please try again.');
    }
  };


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <ImageBackground source={require('./assets/7722074368.png')} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Log in</Text>
          <Image style={styles.icon} source={require('./assets/icons8-user-64.png')}></Image>
        </View>

        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', marginTop: 45 }}>
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
          <TouchableOpacity onPress={handleLoginPress} style={styles.button}  >
            <Text style={{ color: 'white', fontSize: 28, position: 'relative', top: 14, fontFamily: 'LilitaOne-Regular' }}>log in</Text>
          </TouchableOpacity>
          <Text style={{position:'relative', top:25 }}>or Sign up Using</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button1}  >
            <Text style={{ color: 'black', fontSize: 22, position: 'relative', top: 5, fontFamily: 'LilitaOne-Regular' }}>sign up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleBiometricLogin} style={styles.button1}>
  <Text style={{ color: 'black', fontSize: 18, position: 'relative', top: 25, fontFamily: 'LilitaOne-Regular' }}>
    Use Touch ID
  </Text>
</TouchableOpacity>

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
    borderColor: 'white',
    borderRadius: 8,
    padding: 10,
    width: '88%',
    color: 'white',
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
    elevation: 9,
    marginTop: 190

  },
  button1: {
   
    alignItems: 'center',
    height: 60,
    width: 250,
    alignSelf: 'center',
    marginTop: 30,
    

  },

});
