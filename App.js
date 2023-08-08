import { View, Text } from 'react-native'
import React from 'react'
import Login from './screen/Login'
import NoteList from './screen/NoteList'
 

export default function App() {
  return (
    <View style={{flex:1}}>
      <NoteList/>
    </View>
  )
}