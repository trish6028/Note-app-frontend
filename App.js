import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screen/Welcome';
import Login from './screen/Login';
import NoteList from './screen/NoteList';
import ItemDetailScreen from './screen/ItemDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={{flex:1}}>
    //   <NoteList/>
    // </View>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
       
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NoteList" component={NoteList} />
      <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
    </Stack.Navigator>

      
    </NavigationContainer>
  )
}