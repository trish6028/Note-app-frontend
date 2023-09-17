// import { View,Alert, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Modal , RefreshControl } from 'react-native'
// import React, { useState, useEffect } from 'react';
// import { FAB } from 'react-native-paper';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import moment from 'moment';

// export default function NoteList({ navigation }) {

//     const [data, setData] = useState([]);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [note, setNote] = useState('');
//     const [refreshing, setRefreshing] = useState(false);

//     const formatDateTime = dateTime => {
//       return moment(dateTime).format('MMMM Do YYYY, h:mm:ss a');
//     };

//     const handleSaveNote = () => {
//         if (note.trim() === '') {
//           Alert.alert('Error', 'Note cannot be empty.');
//           return;
//         }

//         Alert.alert(
//           'Confirm Save',
//           'Are you sure you want to save this note?',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { text: 'Save', onPress: saveNoteToDatabase },
//           ]
//         );
//       };


//     const openModal = () => {
//         setModalVisible(true);
//       };

//       const closeModal = () => {
//         setModalVisible(false);
//       };

//       const handleRefresh = () => {
//         setRefreshing(true); // Set refreshing indicator to true

//         // Fetch new data or update existing data
//         loadData();

//         setRefreshing(false); // Set refreshing indicator back to false
//       };

//     useEffect(() => {
//         loadData();

//     }, []);

//     const loadData = () => {
//         fetch('http://192.168.1.6:3000/api/notes/getNotes')

//             .then((response) => response.json())
//             // .then((json) => setData(json))
//             .then((json) => {

//               const sortedData = json.sort((a, b) => new Date(b.event_datetime) - new Date(a.event_datetime));
//               setData(sortedData);
//             });

//     };


//     const saveNoteToDatabase = async () => {
//         try {
//           const response = await fetch('http://192.168.1.6:3000/api/notes/saveNotes', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ note: note }),
//           });

//           if (response.ok) {
//             console.log('Note saved to database');
//             setNote('');
//             closeModal()
//              loadData();
//           } else {
//             console.error('Error saving note');
//           }
//         } catch (error) {
//           console.error('Error saving note:', error);
//         }
//       };


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

//                      <Modal visible={modalVisible} animationType="fade"    >
//                         <View style={styles.modalContent}>
//                             <ScrollView style={{marginTop:20}}>
//                             <TextInput
//                               multiline
//                               numberOfLines={4}  
//                               placeholder="Enter your text here"
//                               value={note}
//                               textAlignVertical="top"
//                               onChangeText={setNote}
//                               style={styles.textArea} />
//                              </ScrollView>

//                             <TouchableOpacity style={styles.button}  onPress={handleSaveNote}><Text  style={{color:'white' ,  textAlign: 'center',fontSize:20, fontWeight: 'bold',}}>SAVE</Text></TouchableOpacity>
//                             <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
//                                 <Text>Close</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </Modal>

//                 </View>

//                 <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
//                     <FlatList
//                      style={styles.flatList}
//                         data={data}
//                         renderItem={({ item }) => (
//                             <TouchableOpacity
//                                 style={styles.itemContainer}
//                                 onPress={() => navigation.navigate('ItemDetail', { item })}
//                             >
//                                <Text style={{textAlign:'center', fontSize:19, fontWeight:'700' }}>   {item.note.length > 50 ? item.note.substring(0, 50) + '...' : item.note}</Text>
//                                 <Text style={{textAlign:'center' }}>{formatDateTime(item.event_datetime)}</Text>

//                              </TouchableOpacity>
//                         )}
//                         keyExtractor={(item) => item.id.toString()}
//                         refreshControl={
//                           <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
//                         }
//                     />
//                 </View>
//             </ImageBackground>
//         </View>
//     )
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
//       flexDirection: 'column',
//       width:340,
//        height: 100,
//         borderRadius: 15,
//         padding: 25,
//         backgroundColor: '#C5B7FE',
//         marginTop:20,
//         elevation:10,

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
//       },
//       closeButton: {
//         marginTop: 20,
//         padding: 10,
//          backgroundColor: 'lightgray',
//         borderRadius: 5,
//       },
//       contextMenu: {
//         position: 'absolute',
//         bottom: 20,
//         right: 20,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         padding: 10,
//         elevation: 5,
//     },
//     contextMenuItem: {
//         padding: 8,
//     },
//     editModalContent: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     input: {
//         width: '80%',
//         padding: 10,
//         marginBottom: 10,
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 5,
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
//     textArea: {

//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 25,
//         padding: 8,
//         height: 250,  
//         fontSize:20,
//         width:350,

//       },
//       button: {
//         backgroundColor: 'purple',
//         padding: 10,
//         borderRadius: 5,
//         marginVertical: 10,

//       },

// });







import React, { useState, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Modal, TextInput, Image, KeyboardAvoidingView, Button } from 'react-native';
import { FAB } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import mime from 'mime'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import baseUrl from '../common/url.js'

export default function NoteList({ navigation }) {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [updatedNote, setUpdatedNote] = useState('');
  const [image, setImage] = useState({});

  const openUploader = async () => {
    await launchCamera()
      .then((res) => {
        console.log(res.assets[0].uri);

        const newImageUri = "file:///" + res.assets[0].uri.split("file:/").join("");
        setImage({
          uri: newImageUri,
          type: mime.getType(newImageUri),
          name: newImageUri.split("/").pop()
        })

      })
      .catch((err) => {
        console.log(err);
      });
  }




  const formatDateTime = dateTime => {
    return moment(dateTime).format('MMMM Do YYYY, h:mm:ss a');
  };




  const loadData = () => {
    fetch(`${baseUrl}/api/notes/getNotes`)
      .then(response => response.json())
      // .then(json => setData(json));
      .then(json => {
        //
        const sortedData = json.sort((a, b) => new Date(b.event_datetime) - new Date(a.event_datetime));
        setData(sortedData);
      });

  };


  useEffect(() => {
    loadData();
  }, []);


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
    setNote('');
  };



  const handleImageSelect = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.error) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };



  const handleSaveNote = () => {
    if (note.trim() === '') {
      Alert.alert('Error', 'Note cannot be empty.');
      return;
    }

    Alert.alert(
      'Confirm Save',
      'Are you sure you want to save this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Save', onPress: saveNoteToDatabase },
      ]
    );
  };




  const deleteNote = async id => {
    try {
      const response = await fetch(`${baseUrl}/api/notes/deleteNote/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Note deleted from database');
        loadData();
      } else {
        console.error('Error deleting note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };





  const updateAllNote = () => {
    Alert.alert(
      'Confirm Update',
      'Are you sure you want to update this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Update',
          onPress: async () => {
            try {
              const response = await fetch(
                `${baseUrl}/api/notes/updateNote/${selectedItem.id}`,
                {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ note: updatedNote }),
                }
              );

              if (response.ok) {
                console.log('Note updated in database');
                setUpdatedNote('');
                setSelectedItem(null);

                loadData(); // Refresh the list
              } else {
                console.error('Error updating note');
              }
            } catch (error) {
              console.error('Error updating note:', error);
            }
          },
        },
      ]
    );
  };



  const updateNote = item => {
    setUpdatedNote(item.note);
    setSelectedItem(item);
    setModalVisible(true);

  };



  const saveNoteToDatabase = async () => {
    try {
      await fetch(`${baseUrl}/api/notes/saveNotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note: note }),
       
      }).then(res => res.json())
        .then(res => {
          const imageData = new FormData()
          imageData.append("image", image)
          console.log(imageData);
          console.log(res);

          fetch(`${baseUrl}/api/notes/upload_image/`+res,
            {
              body: imageData,
              method: "POST",
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            }).then(res => res.json())
            .then(res => {
              console.log(res);
              loadData();
              setNote('');
              closeModal();
            })
            .catch(err => {
              console.log(err);
            });

        })
      // if (response.ok) {
      //   console.log('Note saved to database');
      //   setNote('');

      //    loadData();
      // } else {
      //   console.error('Error saving note');
      // }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };




  const optionsOverlay = (
    <View style={styles.optionsOverlay}>

      <TouchableOpacity
        style={styles.optionsButton}
        onPress={() => {
          const confirmDelete = () => {
            deleteNote(selectedItem.id);
          };

          Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this note?',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel') },
              { text: 'Delete', onPress: confirmDelete },
            ]
          );
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white", alignSelf: 'center' }}>Delete</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.optionsButton}
        onPress={() => {
          setOptionsVisible(false);
          updateNote(selectedItem);
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white", alignSelf: 'center' }}>Update</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.optionsButton}
        onPress={() => {
          setOptionsVisible(false);
          setSelectedItem(null);
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "white", alignSelf: 'center' }}>Cancel</Text>
      </TouchableOpacity>

    </View>
  );





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
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>

            <Modal visible={modalVisible} animationType="fade">
              <View style={styles.modalContent}>
                <ScrollView style={{ marginTop: 20 }}>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder="Enter your text here"
                    placeholderTextColor="white"
                    value={selectedItem ? updatedNote : note}
                    textAlignVertical="top"
                    onChangeText={selectedItem ? setUpdatedNote : setNote}
                    style={styles.textArea}
                  />

                  <TouchableOpacity style={styles.button} onPress={openUploader}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>Choose Image</Text>
                  </TouchableOpacity>
                  {selectedImage && (
                    <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                  )}

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      if (selectedItem) {
                        updateAllNote();
                      } else {
                        handleSaveNote();
                      }
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>{selectedItem ? 'Update Note' : 'Save Note'}</Text>
                  </TouchableOpacity>


                  <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white", alignSelf: 'center' }}>Close</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </Modal>
            
          </KeyboardAvoidingView>
        </View>

        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            style={styles.flatList}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigation.navigate('ItemDetail', { item })}
                onLongPress={() => {
                  setSelectedItem(item);
                  setOptionsVisible(true);
                }}
              >
                <Text style={{ textAlign: 'center', fontSize: 19, fontWeight: '700' }}>   {item.note.length > 50 ? item.note.substring(0, 50) + '...' : item.note}</Text>
                <Text style={{ textAlign: 'center' }}>{formatDateTime(item.event_datetime)}</Text>
                <Image
                 style={styles.itemImage}
                source={{
                 
                  uri: `${baseUrl}/images/` + item.image_name,
                }}
                />
               

              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ImageBackground>
      {optionsVisible && selectedItem && optionsOverlay}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemImage: {
    width: 50,
    height: 50,
    position:'absolute',
    left:15,
    top:25
    
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
    marginTop: 10,
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
    backgroundColor: "#a29bfe"
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    width: 180,
    elevation: 10,
    width: 348
  },
  textArea: {
    borderWidth: 1,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20,
    padding: 8,
    height: 300,
    fontSize: 20,
    width: 350,
    marginTop: 30
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    elevation: 10,
    marginTop: 20,
    width: 348

  },
  selectedImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    width: 340,
    height: 100,
    borderRadius: 15,
    padding: 25,
    backgroundColor: '#C5B7FE',
    marginTop: 20,
    elevation: 10,
  },
  optionsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionsButton: {
    backgroundColor: '#6c5ce7',
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
    height: 60,
    width: 200,
    elevation: 10,
    borderBottomColor: 'white',
    borderWidth: 1
  },
});



































