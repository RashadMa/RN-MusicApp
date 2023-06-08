import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GoBack from '../../assets/images/player/GoBack'
import LongLine from '../../assets/images/home/LongLine'
import ShortLine from '../../assets/images/home/ShortLine'
import Favs from '../../assets/images/player/AddToFavs'
import Rectangle from '../../assets/images/player/Rectangle'
import ProfileDots from '../../assets/images/home/ProfileDots'
import tracks from '../../model/musicDatas'
import Repeat from '../../assets/images/player/Repeat'
import Prev from '../../assets/images/player/Prev'
import BorderedPlay from '../../assets/images/player/BorderedPlay'
import Next from '../../assets/images/player/Next'
import ThreeDots from '../../assets/images/player/ThreeDots'

const MusicPlayer = ({ route, navigation }: any) => {
      const { id } = route.params
      return (
            <SafeAreaView style={styles.body}>
                  <View style={styles.playerHeader}>
                        <GoBack onPress={() => navigation.goBack()} />
                        <View>
                              <View style={{ alignItems: "center" }}>
                                    <Text style={styles.nowPlaying}>Now Playing</Text>
                                    <LongLine />
                                    <ShortLine />
                              </View>
                        </View>
                        <Favs />
                  </View>
                  <View style={styles.player}>
                        <View style={{ alignItems: "center" }}>
                              <ProfileDots style={styles.dots} />
                              <Rectangle />
                              <Image style={styles.albumImg} source={{ uri: tracks[0].imageUrl }} />
                              <View style={{ marginTop: 20 }}>
                                    <Text style={styles.title}>{tracks[0].title}</Text>
                                    <Text style={styles.artist}>{tracks[0].artist}</Text>
                              </View>
                        </View>
                        <View style={{ width: "100%", height: 60, backgroundColor: "#000", marginVertical: 30 }}>
                              <Text>
                                    Slider
                              </Text>
                        </View>
                        <View style={styles.operators}>
                              <TouchableOpacity>
                                    <Repeat />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                    <Prev />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                    <BorderedPlay />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                    <Next />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                    <ThreeDots />
                              </TouchableOpacity>

                        </View>
                  </View>
            </SafeAreaView>
      )
}

export default MusicPlayer

const styles = StyleSheet.create({
      body: {
            backgroundColor: "#FFFFED",
            flex: 1,
      },
      playerHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15
      },
      nowPlaying: {
            fontWeight: "600",
            fontSize: 20
      },
      player: {
            marginVertical: 20,
      },
      dots: {
            position: "absolute",
            right: 50,
            top: -20
      },
      albumImg: {
            width: 316,
            height: 310,
            borderRadius: 30,
            position: "absolute",
            top: 10,
            borderWidth: 0.5
      },
      title: {
            fontSize: 25,
            fontWeight: "600",
      },
      artist: {
            marginTop: 5,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "200"
      },
      operators: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15
      }
})