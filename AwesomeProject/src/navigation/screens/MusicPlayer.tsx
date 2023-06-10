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
import TrackPlayer, { Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player'
import Pause from '../../assets/images/player/Pause'
import NoRepeat from '../../assets/images/player/NoRepeat'
import RepeatOnce from '../../assets/images/player/RepeatOnce'

const setUpPlayer = async () => {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(tracks)

}

// const togglePlayback = async (playbackState) => {
//       const currentTrack = await TrackPlayer.getCurrentTrack()
//       console.log(currentTrack);
//       if (currentTrack != null) {
//             if (playbackState == State.Paused) {
//                   await TrackPlayer.play()
//             } else {
//                   await TrackPlayer.pause()
//             }
//       }
// }

const MusicPlayer = ({ route, navigation }: any) => {
      const playbackState = usePlaybackState()
      const progress = useProgress()
      const [pause, setPause] = useState("paused")
      const { id } = route.params
      const { width, height } = Dimensions.get('window')
      const trackSlider = useRef<any>(null)
      const [title, setTitle] = useState("")
      const [artist, setArtist] = useState("")
      const [imageUrl, setImageUrl] = useState("")
      const [repeatMode, setRepeatMode] = useState("off")


      const changeRepeatMode = () => {
            if (repeatMode == "off") {
                  TrackPlayer.setRepeatMode(RepeatMode.Track)
                  setRepeatMode("track")
            }
            if (repeatMode == "track") {
                  TrackPlayer.setRepeatMode(RepeatMode.Queue)
                  setRepeatMode("repeat")
            }
            if (repeatMode == "repeat") {
                  TrackPlayer.setRepeatMode(RepeatMode.Off)
                  setRepeatMode("off")
            }
      }



      useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event: any) => {
            if (event.type == Event.PlaybackTrackChanged && event.nextTrack != null) {
                  const track = await TrackPlayer.getTrack(event.nextTrack)
                  const { title, artist, imageUrl } = track;
                  setTitle(title)
                  setArtist(artist)
                  setImageUrl(imageUrl)

            }
      })

      const skipTrack = async (trackId) => {
            await TrackPlayer.skip(trackId)
            setPause("playing")
            TrackPlayer.play()
      }

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
                  skipTrack(index)
                  setTrackIndex(index)
            })
            return () => {
                  scrollX.removeAllListeners()
            }
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
                        <Image style={styles.albumImg} source={{ uri: imageUrl }} />
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
                              <Text style={styles.title}>{title}</Text>
                              <Text style={styles.artist}>{artist}</Text>
                        </View>
                        <View style={{ padding: 15 }}>
                              <Slider
                                    style={styles.progressBar}
                                    value={progress.position}
                                    minimumValue={0}
                                    maximumValue={progress.duration}
                                    minimumTrackTintColor="#FF6B00"
                                    maximumTrackTintColor="#C7C7C7"
                                    thumbTintColor="#FF6B00"
                                    onSlidingComplete={async (value) => {
                                          await TrackPlayer.seekTo(value)
                                    }}
                              />
                              <View style={styles.timeWrapper}>
                                    <Text>{new Date(progress.position * 1000).toISOString().substr(14, 5)}</Text>
                                    <Text>{new Date((progress.duration - progress.position) * 1000).toISOString().substr(14, 5)}</Text>
                              </View>
                        </View>
                        <View style={styles.operators}>
                              <TouchableOpacity onPress={changeRepeatMode}>
                                    {/* {
                                          repeatMode == "off" ? <NoRepeat /> : repeatMode == "track" ? <RepeatOnce /> : <Repeat />
                                    } */}
                                    <Repeat />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={skipToPrev}>
                                    <Prev />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={togglePause}>
                                    {
                                          pause == "paused" ? <BorderedPlay /> : <View style={styles.pauseWrapper}><Pause /></View>
                                    }

                              </TouchableOpacity>
                              <TouchableOpacity onPress={skipToNext}>
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
      },
      progressBar: {
            width: "100%",
            height: 40,
            flexDirection: "row",
      },
      pauseWrapper: {
            width: 70,
            height: 70,
            backgroundColor: "#fff",
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2
      },
      timeWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
      }
})