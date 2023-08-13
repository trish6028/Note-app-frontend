import { View, Text } from 'react-native'
import {  } from 'react-native-paper'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import NoteList from './NoteList';
 
import About from './About';

const Drawer = createDrawerNavigator();


export default function DrawerNav() {
  return (
    <Drawer.Navigator     screenOptions={{ headerShown: false }}>

    <Drawer.Screen name="NoteList" component={NoteList} />
    <Drawer.Screen  scre name="About" component={About}  />
  </Drawer.Navigator>
  )
}