import React from 'react';
import { View, Text } from 'react-native';

export default function ItemDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <Text>Address: {item.address}</Text>
      <Text>Salary: {item.salary}</Text>
      {/* ... additional details as needed ... */}
    </View>
  );
}
