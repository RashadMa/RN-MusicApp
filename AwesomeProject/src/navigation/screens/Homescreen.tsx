import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LongLine from '../../assets/images/home/LongLine'
import Play from '../../assets/images/home/Play'
import ShortLine from '../../assets/images/home/ShortLine'
import Star from '../../assets/images/onboarding/Star'
import ProfileDots from '../../assets/images/home/ProfileDots'
import artists from '../../model/musicDatas'

const Homescreen = ({ navigation }: any) => {
      const tracks = artists.map((artist) => artist.tracks).flat()

      const renderArtists = ({ item }: any) => {
            return <>
                  <TouchableOpacity onPress={() => navigation.navigate('artistdetails', { id: item.id })}>
                        <View style={[styles.itemContainer, styles.itemGap]}>
                              <View style={styles.imgContainer}>
                                    <Image style={styles.albumImg} source={{ uri: item.imageUrl }} />
                              </View>
                              <View style={{ alignItems: "center" }}>
                                    <Text style={{ width: "70%", textAlign: "center" }}>
                                          {item.name}
                                    </Text>
                              </View>
                        </View>
                  </TouchableOpacity>
            </>
      }

      const recentlyPlayed = ({ item }: any) => {
            return <>
                  <View style={[styles.itemContainer, styles.itemGap]}>
                        <View style={styles.imgContainer}>
                              <Image style={styles.albumImg} source={{ uri: item.imageUrl }} />
                              <TouchableOpacity onPress={() => navigation.navigate('musicplayer', { id: item.id })}>
                                    <Play style={styles.play} />
                              </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center" }}>
                              <Text style={{ width: "70%", textAlign: "center" }}>
                                    {item.title}
                              </Text>
                        </View>
                  </View>
            </>
      }

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
                                    {/* <ProfileDots /> */}
                                    <Image style={styles.profile} source={require('../../assets/images/profile/Maskgroup.jpg')} />
                              </View>
                        </View>
                        <View>
                              <TextInput style={styles.input} placeholder='Search for any music or podcast' />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={styles.recentlyPlayed}>Artists</Text>
                                    <Star />
                              </View>
                              <TouchableOpacity>
                                    <Text style={styles.viewMore}>View More</Text>
                              </TouchableOpacity>
                        </View>
                  </View>
                  <View>
                        <FlatList
                              showsHorizontalScrollIndicator={false}
                              horizontal
                              data={artists}
                              renderItem={renderArtists}
                              ItemSeparatorComponent={() => <View style={styles.separator} />}
                        />
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                              <Text style={styles.recentlyPlayed}>Recently Played</Text>
                              <Star />
                        </View>
                        <TouchableOpacity>
                              <Text style={styles.viewMore}>View More</Text>
                        </TouchableOpacity>
                  </View>
                  <View>
                        <FlatList
                              showsHorizontalScrollIndicator={false}
                              horizontal
                              data={tracks}
                              renderItem={recentlyPlayed}
                              ItemSeparatorComponent={() => <View style={styles.separator} />}
                        />
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
      },
      albumImg: {
            width: 114,
            height: 114,
            borderRadius: 20,
            resizeMode: "cover",
      },
      imgContainer: {
            shadowColor: "grey",
            shadowOffset: {
                  width: 0,
                  height: 5,
            },
            shadowOpacity: 2.58,
            shadowRadius: 2.00,
            elevation: 50,
            marginBottom: 15,
      },
      itemContainer: {
            backgroundColor: '#FFFFED',
            padding: 10,
      },
      separator: {
            height: 10,
            backgroundColor: 'transparent',
      },
      itemGap: {
            marginBottom: 16,
      },
      play: {
            position: "absolute",
            bottom: 10,
            right: 10,
      }
})