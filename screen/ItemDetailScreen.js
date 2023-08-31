import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

export default function ItemDetailScreen({ route }) {
  const formatDateTime = (dateTime) => {
    return moment(dateTime).format('MMMM Do YYYY, h:mm:ss a');
  };

  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.noteText}>{item.note}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.dateText}>{formatDateTime(item.event_datetime)}</Text>
          <Image
                 style={styles.itemImage}
                source={{
                 
                  uri: `${baseUrl}/images/` + item.image_name,
                }}
                />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  content: {
    flex: 1,
    backgroundColor: '#7d5fff',
    borderRadius: 20,
    margin: 20,
    padding: 100,
    elevation: 5,
    height:500,
    
  },
  header: {
    marginBottom: 15,
  },
  noteText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: 'black',
  },
  itemImage: {
    width: 200,
    height: 200,
    position:'absolute',
  
    top:100,

    
  },
});
