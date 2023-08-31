import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screen/Welcome';
import Login from './screen/Login';
import ItemDetailScreen from './screen/ItemDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './screen/DrawerNav';
import NoteList from './screen/NoteList';
import SignUp from './screen/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={{flex:1}}>
    //    <NoteList/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="NoteList" component={NoteList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

