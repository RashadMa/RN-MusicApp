import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Animated, Alert, Pressable, Modal } from 'react-native'
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
import TrackPlayer, { Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player'
import Pause from '../../assets/images/player/Pause'
import artists from '../../model/musicDatas'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'

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
      const [isPaused, setIsPaused] = useState(true)
      const { id } = route.params
      const { width, height } = Dimensions.get('window')
      const trackSlider = useRef<any>(null)
      const [title, setTitle] = useState("")
      const [artist, setArtist] = useState("")
      const [imageUrl, setImageUrl] = useState("")
      const [lyrics, setLyrics] = useState("")
      const [repeatMode, setRepeatMode] = useState("off")
      const trackss = artists.find(artist => artist.id === route.params.id)?.tracks
      const setUpPlayer = async () => {
            await TrackPlayer.setupPlayer()
            await TrackPlayer.updateOptions({
                  capabilities: [
                        Capability.Play,
                        Capability.Pause,
                        Capability.SkipToNext,
                        Capability.SkipToPrevious,
                        Capability.Stop,
                  ]
            })
            await TrackPlayer.add(trackss)
      }

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
                  const { title, artist, imageUrl, lyrics } = track;
                  setTitle(title)
                  setArtist(artist)
                  setImageUrl(imageUrl)
                  setLyrics(lyrics)

            }
      })

      const skipTrack = async (trackId) => {
            await TrackPlayer.skip(trackId)
            setIsPaused(false)
            TrackPlayer.play()
      }

      const togglePause = () => {
            if (isPaused) {
                  TrackPlayer.play()
                  setIsPaused(false)
            } else {
                  TrackPlayer.pause()
                  setIsPaused(true)
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

      const renderTracks = () => {
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
                        {
                              imageUrl ? <Image style={styles.albumImg} source={{ uri: imageUrl }} /> : <ActivityIndicator style={{ position: "absolute" }} animating={true} color={MD2Colors.red800} />
                        }
                  </Animated.View>
            </>
      }
      const [modalVisible, setModalVisible] = useState(false);

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
                        <View style={{ paddingHorizontal: 15 }}>
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
                                          isPaused ? <BorderedPlay /> : <View style={styles.pauseWrapper}><Pause /></View>
                                    }

                              </TouchableOpacity>
                              <TouchableOpacity onPress={skipToNext}>
                                    <Next />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                    <ThreeDots />
                              </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                              alignItems: "center",
                              marginTop: 20
                        }}
                              onPress={() => setModalVisible(true)}
                        >
                              <Text style={{
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    padding: 15,
                                    fontWeight: "600",
                              }}>View Lyrics</Text>
                        </TouchableOpacity>
                        <View style={styles.centeredView}>
                              <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                          Alert.alert('Modal has been closed.');
                                          setModalVisible(!modalVisible);
                                    }}>
                                    <View style={styles.centeredView}>
                                          <View style={styles.modalView}>
                                                <Text style={styles.modalText}>{
                                                      lyrics ? lyrics : "No Lyrics Found"
                                                }</Text>
                                                <TouchableOpacity style={{
                                                      alignItems: "center",
                                                      marginTop: 20
                                                }}
                                                      onPress={() => setModalVisible(!modalVisible)}
                                                >
                                                      <Text style={{
                                                            borderWidth: 1,
                                                            borderRadius: 20,
                                                            padding: 15,
                                                            fontWeight: "600",
                                                      }}>Hide Lyrics</Text>
                                                </TouchableOpacity>
                                          </View>
                                    </View>
                              </Modal>

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
      },
      centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 22,
            // position: "absolute",
      },
      modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
      },
      button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
      },
      buttonOpen: {
            backgroundColor: '#F194FF',
      },
      buttonClose: {
            backgroundColor: '#2196F3',
      },
      textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
      },
      modalText: {
            marginBottom: 15,
      },
})