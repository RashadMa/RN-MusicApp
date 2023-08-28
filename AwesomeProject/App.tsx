import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from './src/navigation/stacks/OnboardingStack'
import TabMain from './src/navigation/TabMain'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './src/navigation/stacks/HomeStack'
const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <>
      {/* <Onboarding /> */}
      <NavigationContainer>
        {/* <TabMain /> */}
        <HomeStack />
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})