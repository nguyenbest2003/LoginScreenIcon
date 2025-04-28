import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screen/HomeScreen'
import NewAccount from './Screen/NewAccount'
import ResetPassword from './Screen/ResetPassword'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='NewAccount' component={NewAccount}/>
        <Stack.Screen name= 'ResetPassword' component={ResetPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App