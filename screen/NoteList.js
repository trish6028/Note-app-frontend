import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Button, FAB } from 'react-native-paper';



export default function NoteList({ navigation }) {

    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };

    useEffect(() => {
        loadData();

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
                        onPress={openModal}
                    />
                    <Modal visible={modalVisible} animationType="none">
                        <View style={styles.modalContent}>
                            <Text>Modal Content</Text>
                            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </View>

                <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.itemContainer}
                                onPress={() => navigation.navigate('ItemDetail', { item })}
                            >

                                <Text>ID: {item.id}</Text>
                                <Text>Name: {item.name}</Text>
                                <Text>Address: {item.address}</Text>
                                <Text>Salary: {item.salary}</Text>

                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
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
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
      },

});

NoteList.navigationOptions = {
    headerShown: false, // Hide the header for this screen
  };

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ImageBackground, Modal, TouchableOpacity } from 'react-native';
// import { FAB } from 'react-native-paper';
// import SwipeListView from 'react-native-swipe-list-view';

// export default function NoteList({ navigation }) {
//     const [data, setData] = useState([]);
//     const [modalVisible, setModalVisible] = useState(false);

//     const openModal = () => {
//         setModalVisible(true);
//     };

//     const closeModal = () => {
//         setModalVisible(false);
//     };

//     useEffect(() => {
//         loadData();
//     }, []);

//     const loadData = () => {
//         fetch('http://192.168.1.6:3000/student')
//             .then((response) => response.json())
//             .then((json) => setData(json));
//     };

//     const Item = ({ item }) => (
//         <TouchableOpacity
//             style={styles.itemContainer}
//             onPress={() => navigation.navigate('ItemDetail', { item })}
//         >
//             <Text>ID: {item.id}</Text>
//             <Text>Name: {item.name}</Text>
//             <Text>Address: {item.address}</Text>
//             <Text>Salary: {item.salary}</Text>
//         </TouchableOpacity>
//     );

//     const renderHiddenItem = () => (
//         <View style={styles.hiddenItem}>
//             <TouchableOpacity style={styles.leftAction}>
//                 <Text>Edit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.rightAction}>
//                 <Text>Delete</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <ImageBackground source={require('./assets/7722074368.png')} resizeMode="cover" style={styles.image}>
//                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                     <Text style={styles.text}>My Notes</Text>
//                     <FAB
//                         icon="plus"
//                         style={styles.fab}
//                         onPress={openModal}
//                     />
//                     <Modal visible={modalVisible} animationType="none">
//                         <View style={styles.modalContent}>
//                             <Text>Modal Content</Text>
//                             <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
//                                 <Text>Close</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </Modal>
//                 </View>

//                 <View style={{ flex: 6 }}>
//                     <SwipeListView
//                         data={data}
//                         renderItem={({ item }) => <Item item={item} />}
//                         renderHiddenItem={renderHiddenItem}
//                         leftOpenValue={75}
//                         rightOpenValue={-75}
//                         keyExtractor={(item) => item.id.toString()}
//                     />
//                 </View>
//             </ImageBackground>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     text: {
//         fontFamily: 'LilitaOne-Regular',
//         fontSize: 50,
//         color: 'white',
//         marginTop: 35,
//         textShadowColor: 'rgba(0, 0, 0, 0.45)',
//         textShadowOffset: { width: 2, height: 1.2 },
//         textShadowRadius: 10,
//         marginTop: 10
//     },
//     itemContainer: {
//         backgroundColor: '#f7f1e3',
//         padding: 5,
//         marginVertical: 5,
//         borderRadius: 15,
//         width: 350,
//         backgroundColor: '#C5B7FE',
//     },
//     fab: {
//         position: 'absolute',
//         margin: 8,
//         right: 0,
//         top: 0,
//     },
//     modalContent: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     closeButton: {
//         marginTop: 20,
//         padding: 10,
//         backgroundColor: 'lightgray',
//         borderRadius: 5,
//     },
//     hiddenItem: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: 150,
//     },
//     leftAction: {
//         backgroundColor: 'lightgreen',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 75,
//         height: '100%',
//     },
//     rightAction: {
//         backgroundColor: 'lightcoral',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 75,
//         height: '100%',
//     },
// });
