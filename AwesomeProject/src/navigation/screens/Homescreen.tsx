import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import LongLine from '../../assets/images/home/LongLine'
import ShortLine from '../../assets/images/home/ShortLine'
import ShapedDot from '../../assets/images/onboarding/ShapedDot'
import Star from '../../assets/images/onboarding/Star'
const Homescreen = () => {
      return (
            <SafeAreaView style={styles.body}>
                  <View style={{ margin: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                              <View>
                                    <Text style={styles.goodMorning}>Good Morning!</Text>
                                    <View style={{ alignItems: "center" }}>
                                          <LongLine />
                                          <ShortLine />
                                    </View>
                                    <Text style={styles.letsPlay}>Let’s play some music!</Text>
                              </View>
                              <View>
                                    {/* <ShapedDot style={styles.dots} /> */}
                                    <Image style={styles.profile} source={require('../../assets/images/profile/Maskgroup.jpg')} />
                              </View>
                        </View>
                        <View>
                              <TextInput style={styles.input} placeholder='Search for any music or podcast' />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={styles.recentlyPlayed}>Recently Played</Text>
                                    <Star />
                              </View>
                              <Text style={styles.viewMore}>View More</Text>

                        </View>
                  </View>

            </SafeAreaView>
      )
}

export default Homescreen

const styles = StyleSheet.create({
      body: {
            backgroundColor: "#FFFFED",
            flex: 1,
      },
      goodMorning: {
            fontWeight: "500",
            fontSize: 30
      },
      letsPlay: {
            marginTop: 20,
      },
      profile: {

      },
      dots: {
            position: "absolute",
      },
      input: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF",
            padding: 20,
            borderRadius: 20,
            borderColor: "#000",
            borderWidth: 1,
            width: "100%",
            shadowColor: "grey",
            shadowOffset: {
                  width: 0,
                  height: 5,
            },
            shadowOpacity: 2.58,
            shadowRadius: 2.00,
            elevation: 50,
            marginVertical: 20
      },
      recentlyPlayed: {
            fontWeight: "500",
            fontSize: 20,
            marginEnd: 5,
      },
      viewMore: {
            fontWeight: "300",
            fontSize: 18,
            textDecorationLine: 'underline',
            color: "#6B6B6B",
      }
})