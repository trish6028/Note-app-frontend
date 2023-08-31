import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={styles.text}>Easy Note</Text>
                <Text style={styles.textz}>Your Thoughts, Effortlessly Captured</Text>
            </View>

            <View style={{ flex: 4.1, justifyContent: 'center', alignItems: 'center', }}>
                <Image source={require('./assets/4058705_2120897-removebg-preview.png')} style={styles.image} />
            </View>

            <View style={{ flex: 3.2, backgroundColor: '#C5B7FE', width: 391, borderTopStartRadius: 55, borderTopEndRadius: 55, justifyContent: 'center', }}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}  >
                    <Image style={{ width: 25, height: 20, position: 'relative', top: 20, left: 90 }} source={require('./assets/icons8-arrow-100.png')} />
                    <Text style={{ color: 'white', fontSize: 23, position: 'relative', bottom: 7, fontFamily: 'FredokaOne-Regular' }}>Get Started</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7D69CD'
    },
    text: {
        fontFamily: 'FredokaOne-Regular',
        fontSize: 50,
        color: 'white',
        marginTop: 35,
        textShadowColor: 'rgba(0, 0, 0, 0.45)',
        textShadowOffset: { width: 2, height: 1.2 },
        textShadowRadius: 10,
    },
    textz: {

        fontSize: 16,
        fontFamily: 'Gluten-Regular',
        color: 'white',
        marginTop: 5,
        textShadowColor: 'rgba(0, 0, 0, 0.45)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 8
    },

    image: {
        width: 350,
        height: 360,
        resizeMode: 'contain',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 3,

    },
    button: {
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#824FD6',
        height: 60,
        width: 250,
        alignSelf: 'center',
        elevation: 5

    },

});