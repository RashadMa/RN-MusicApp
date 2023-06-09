import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
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
import Slider from '@react-native-community/slider'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'

const setUpPlayer = async () => {
      try {
            await TrackPlayer.setupPlayer()
            await TrackPlayer.add(tracks)
      }
      catch (error) {
            console.log(error)
      }
}

// const togglePlayback = async ({ playbackState }: any) => {
//       const currentTrack = await TrackPlayer.getCurrentTrack()
//       console.log(playbackState);
//       if (currentTrack != null) {
//             if (playbackState == State.Paused) {
//                   await TrackPlayer.play()
//             } else {
//                   await TrackPlayer.pause()
//             }
//       }
// }

const MusicPlayer = ({ route, navigation }: any) => {
      // const playbackState = usePlaybackState()
      const [pause, setPause] = useState("paused")
      const { id } = route.params
      const { width, height } = Dimensions.get('window')
      const trackSlider = useRef<any>(null)


      const togglePause = () => {
            if (pause == "paused") {
                  TrackPlayer.play()
                  setPause("playing")
            } else {
                  TrackPlayer.pause()
                  setPause("paused")
            }
      }

      useEffect(() => {
            setUpPlayer()
            scrollX.addListener(({ value }) => {
                  const index = Math.round(value / width)
                  setTrackIndex(index)
            })
            // return () => {
            //       scrollX.removeAllListeners()
            // }
      }, [])
      const scrollX = useRef(new Animated.Value(0)).current
      const [trackIndex, setTrackIndex] = useState(0)
      const skipToNext = () => {
            trackSlider.current.scrollToOffset({
                  offset: (trackIndex + 1) * width,
            })
      }
      const skipToPrev = () => {
            trackSlider.current.scrollToOffset({
                  offset: (trackIndex - 1) * width,
            })
      }

      const renderTracks = ({ item, index }: any) => {
            return <>
                  <Animated.View style={{
                        width: width,
                        justifyContent: "center",
                        alignItems: "center",
                  }}>
                        <View>
                              <ProfileDots style={styles.dots} />
                              <Rectangle />
                        </View>
                        <Image style={styles.albumImg} source={{ uri: item.imageUrl }} />
                  </Animated.View>
            </>
      }

      return (
            <SafeAreaView style={styles.body}>
                  <View style={styles.playerHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                              <GoBack />
                        </TouchableOpacity>
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
                        <Animated.FlatList
                              ref={trackSlider}
                              showsHorizontalScrollIndicator={false}
                              horizontal
                              data={tracks}
                              renderItem={renderTracks}
                              pagingEnabled
                              scrollEventThrottle={16}
                              onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                    { useNativeDriver: true }
                              )}
                        />
                        <View style={{ marginTop: 20, alignItems: "center" }}>
                              <Text style={styles.title}>{tracks[trackIndex].title}</Text>
                              <Text style={styles.artist}>{tracks[trackIndex].artist}</Text>
                        </View>
                        <View style={{ padding: 15 }}>
                              <Slider
                                    style={styles.progressBar}
                                    value={0}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#FF6B00"
                                    maximumTrackTintColor="#C7C7C7"
                                    thumbTintColor="#FF6B00"
                                    onSlidingComplete={() => { }}
                              />
                        </View>
                        <View style={styles.operators}>
                              <TouchableOpacity>
                                    <Repeat />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={skipToPrev}>
                                    <Prev />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={togglePause}>
                                    <BorderedPlay />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={skipToNext}>
                                    <Next />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={TrackPlayer.pause}>
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
      },
      progressBar: {
            width: "100%",
            height: 40,
            flexDirection: "row",
      }
})