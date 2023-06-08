import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Homescreen from '../screens/Homescreen';
import MusicPlayer from '../screens/MusicPlayer';
const Home = createNativeStackNavigator();

const HomeStack = () => {
      return (
            <>
                  <Home.Navigator screenOptions={{ headerShown: false }}>
                        <Home.Screen name="homescreen" component={Homescreen} />
                        <Home.Screen name="musicplayer" component={MusicPlayer} />
                  </Home.Navigator>
            </>
      )
}

export default HomeStack

const styles = StyleSheet.create({})