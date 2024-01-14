import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Trending } from '../screens/Trending'

export const SCREENS = {
  TRENDING: 'Trending',
}

const Stack = createNativeStackNavigator()

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.TRENDING}
          options={{ headerShown: false }}
          component={Trending}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
