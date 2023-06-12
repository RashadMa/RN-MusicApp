import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stacks/HomeStack';
import FavouritesStack from './stacks/FavouritesStack';
import SettingStack from './stacks/SettingStack';
import Test from './screens/Test';
const Tab = createBottomTabNavigator();
const TabMain = () => {
      return (
            <>
                  <Tab.Navigator screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,

                  }}>
                        <Tab.Screen name='HomeStack' component={HomeStack}
                              options={{

                              }} />
                        <Tab.Screen name='FavouritesStack' component={Test}
                              options={{

                              }} />
                        <Tab.Screen name='SettingStack' component={SettingStack}
                              options={{

                              }} />
                  </Tab.Navigator>
            </>
      )
}

export default TabMain

const styles = StyleSheet.create({})