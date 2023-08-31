import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Linking, openLink } from 'react-native';

export default function About() {

  function openLink(url) {
    const supported = Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url).catch(err => console.error('Error opening link:', err));
    } else {
      console.warn("Don't know how to open URL:", url);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/d6d2839d109b82aa73610352b5104845.jpeg')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay} />
        <Text style={styles.about}>About Me</Text>
        <Image style={styles.icon} source={require('./assets/my.png')} />
        <View style={styles.square}>
          <Text style={styles.name}>Trishan priya sachin</Text>
          <Text style={styles.name2}>Mobile Application Developer</Text>


          <View style={styles.socialLinks}>
            <TouchableOpacity onPress={() => openLink('https://www.facebook.com/trishan.priyasachin.35')}>
              <View style={styles.linkContainer}>
                <Image style={styles.socialIcon1} source={require('./assets/icons8-facebook-240.png')} />
                <Text style={styles.linkText}>Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/trishan-priyasachin-b96187227/?fbclid=IwAR2yf5LhsnN5dS7TtFyRzDjeBHXyju3SBoIscmVlt37iZhncyYCtQzYHhrk')}>
              <View style={styles.linkContainer}>
                <Image style={styles.socialIcon2} source={require('./assets/icons8-linkedin-96.png')} />
                <Text style={styles.linkText}>LinkedIn</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.instagram.com/__trizh.00/?fbclid=IwAR0CcKFkMRt5SnpmXObSeRzM4E0VTFPUryIeQMqdvDb27C4CTBo68lDJhGw')}>
              <View style={styles.linkContainer}>
                <Image style={styles.socialIcon} source={require('./assets/icons8-instagram-80.png')} />
                <Text style={styles.linkText}>Instagram</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://github.com/trish6028')}>
              <View style={styles.linkContainer}>
                <Image style={styles.socialIcon} source={require('./assets/icons8-github-100.png')} />
                <Text style={styles.linkText}>GitHub</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 93,
    width: 93,
    position: 'absolute',
    zIndex: 1,
    top: 95,
    left: 140,
  },
  square: {
    width: 360,
    height: 580,
    backgroundColor: '#40407a',
    alignSelf: 'center',
    borderRadius: 25,
    elevation: 50,
    marginTop: 80
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },

  about: {
    position: 'absolute',
    fontSize: 50,
    top: 11,
    alignSelf: 'center',
    fontFamily: 'LilitaOne-Regular',
    color: 'black',
  },
  
  name: {
    position: 'absolute',
    fontSize: 35,
    top: 45,
    alignSelf: 'center',
    fontFamily: 'LilitaOne-Regular',
    color: 'white',

  },
  name2: {
    position: 'absolute',
    fontSize: 17,
    top: 85,
    alignSelf: 'center',
    color: 'white',

  },
  socialLinks: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 150,
    transform: [{ translateY: -20 }], // Adjust this value as needed
    left: 0,
    right: 0,
  },
  socialIcon: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  socialIcon1: {
    width: 80,
    height: 80,
    marginVertical: 1,
  },
  socialIcon2: {
    width: 75,
    height: 75,
    marginVertical: 10,
  },
  linkContainer: {
    alignItems: 'center',
  },
  linkText: {
    marginTop: 5,
    color: 'white',
  },
});
