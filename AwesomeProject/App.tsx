import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from './src/navigation/stacks/OnboardingStack'
import TabMain from './src/navigation/TabMain'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <>
      {/* <Onboarding /> */}
      <NavigationContainer>
        <TabMain />
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})