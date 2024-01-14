import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StatusBar } from 'react-native'
import { RootNavigator } from './app/navigation/RootNavigator'

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <RootNavigator />
    </>
  )
}
