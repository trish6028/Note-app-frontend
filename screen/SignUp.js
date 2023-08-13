import { View,TouchableOpacity, Text, KeyboardAvoidingView,StyleSheet,ImageBackground,Image,TextInput } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>

    <ImageBackground source={require('./assets/7722074368.png')} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Sign up</Text>
        <Image style={styles.icon} source={require('./assets/icons8-user-64.png')}></Image>
      </View>

      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
        //   value={username}
        //   onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
        //   secureTextEntry={true}
        //   value={password}
        //   onChangeText={setPassword}

        />
          <TextInput
          style={styles.input}
          placeholder="Re-Enter Password"
          placeholderTextColor="white"
        //   secureTextEntry={true}
        //   value={password}
        //   onChangeText={setPassword}

        />
      </View>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity    style={styles.button}  >
          <Text style={{ color: 'white', fontSize: 28, position: 'relative', top: 14, fontFamily: 'LilitaOne-Regular' }}>Sign up</Text>
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
      top: 10
    },
    input: {
      borderWidth: 1,
      borderColor: 'white', // Set the border color to white
      borderRadius: 8,
      padding: 10,
      width: '88%',
      color: 'white', // Set the text color to white
      marginTop: 20,
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
      marginBottom: 30,
  
    },
  
  
  });
   