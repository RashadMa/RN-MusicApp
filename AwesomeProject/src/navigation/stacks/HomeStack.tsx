import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Homescreen from '../screens/Homescreen';
const Home = createNativeStackNavigator();

const HomeStack = () => {
      return (
            <>
                  <Home.Navigator screenOptions={{ headerShown: false }}>
                        <Home.Screen name="homescreen" component={Homescreen} />
                        {/* <Home.Screen name="placesdetails" component={PlaceDetails} /> */}
                  </Home.Navigator>
            </>
      )
}

export default HomeStack

const styles = StyleSheet.create({})