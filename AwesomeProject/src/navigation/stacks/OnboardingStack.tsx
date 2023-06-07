import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Bro from '../../assets/images/onboarding/Bro'
import Happn from '../../assets/images/onboarding/Happn'
import ShapedDot from '../../assets/images/onboarding/ShapedDot'
import Star from '../../assets/images/onboarding/Star'
import AngleRight from '../../assets/images/onboarding/AngleRight'

const Onboarding = () => {
      return (
            <SafeAreaView style={styles.body}>
                  <Bro />
                  <ShapedDot style={styles.shapedDotes} />
                  <Happn />
                  <Star style={styles.star} />
                  <TouchableOpacity style={styles.signUp}>
                        <Text style={{ fontWeight: "700", fontSize: 20 }}>SIGN UP</Text>
                        <AngleRight />
                  </TouchableOpacity>
            </SafeAreaView>
      )
}

export default Onboarding

const styles = StyleSheet.create({
      body: {
            backgroundColor: "#FFFFED",
            flex: 1,
      },
      shapedDotes: {
            position: "absolute",
            top: 50,
            left: 20
      },
      star: {
            position: "absolute",
            bottom: "36.5%",
            right: "33%"
      },
      signUp: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF6B00",
            padding: 20,
            borderRadius: 25,
            borderColor: "#000",
            borderWidth: 1,
            marginHorizontal: 20,
            position: "absolute",
            bottom: 40,
            width: "90%",
            shadowColor: "grey",
            shadowOffset: {
                  width: 0,
                  height: 5,
            },
            shadowOpacity: 2.58,
            shadowRadius: 2.00,
            elevation: 50,
      }
})