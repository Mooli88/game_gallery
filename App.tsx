import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Trending } from './app/screens/Trending'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Trending'
            options={{ headerShown: false }}
            component={Trending}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
