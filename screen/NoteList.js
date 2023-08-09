import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import { FAB } from 'react-native-paper';


export default function NoteList() {

    const [data, setData] = useState([]);


    useEffect(() => {
        loadData();
        console.log("hutto");
    }, []);

    const loadData = () => {
        fetch('http://192.168.1.6:3000/student')

            .then((response) => response.json())
            .then((json) => setData(json))

    };
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/7722074368.png')} resizeMode="cover" style={styles.image}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>My Notes</Text>
                    <FAB
                        icon="plus"
                        style={styles.fab}
                        onPress={() => console.log('Pressed')}
                    />
                </View>

                <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itemContainer}>
                                    <Text>ID: {item.id}</Text>
                                    <Text>Name: {item.name}</Text>
                                    <Text>Address: {item.address}</Text>
                                    <Text>Salary: {item.salary}</Text>
                                </View>
                            );
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </ImageBackground>
        </View>



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
        marginTop: 10

    },
    itemContainer: {
        backgroundColor: '#f7f1e3',
        padding: 5,
        marginVertical: 5,
        borderRadius: 15,
        width: 350,
        backgroundColor: '#C5B7FE',
    },

    fab: {
        position: 'absolute',
        margin: 8,
        right: 0,
        top: 0,
    },

});