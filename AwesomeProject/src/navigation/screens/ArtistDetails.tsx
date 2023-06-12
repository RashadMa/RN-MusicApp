import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import GoBack from '../../assets/images/player/GoBack'
import LongLine from '../../assets/images/home/LongLine'
import ShortLine from '../../assets/images/home/ShortLine'
import Favs from '../../assets/images/player/AddToFavs'
import artists from '../../model/musicDatas'
import Play from '../../assets/images/home/Play'
import TrackPlayer from 'react-native-track-player'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'

const ArtistDetails = ({ navigation, route }: any) => {
      const { id } = route.params
      const artist = artists.find((artist) => artist.id === id)
      const setUpPlayer = async () => {
            // await TrackPlayer.setupPlayer()
            await TrackPlayer.reset()
            await TrackPlayer.add(artist?.tracks)
      }

      useEffect(() => {
            setUpPlayer()
      }, [])

      const renderTracks = ({ item, index }: any) => {
            return <>
                  <View style={{
                        flexDirection: "row",
                  }}>
                        <View style={styles.imgContainer}>
                              <Image style={styles.albumImg} source={{ uri: item.imageUrl }} />
                              <TouchableOpacity onPress={() => navigation.navigate('musicplayer', { id: item.id })}>
                                    <Play style={styles.play} />
                              </TouchableOpacity>
                        </View>
                        <View style={{}}>
                              <Text style={{
                                    fontWeight: "500",
                                    fontSize: 16,
                                    marginTop: 8,
                                    marginStart: 10,
                              }}>
                                    {item.title}
                              </Text>
                              <Text style={{
                                    fontWeight: "400",
                                    fontSize: 14,
                                    marginTop: 5,
                                    marginStart: 10,
                              }}>
                                    {artist?.name}
                              </Text>
                        </View>
                  </View>
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
                                    <Text style={styles.nowPlaying}>{artist?.name}</Text>
                                    <LongLine />
                                    <ShortLine />
                              </View>
                        </View>
                  </View>
                  <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                  }}>
                        <Image style={{
                              width: "80%",
                              height: 300,
                              borderRadius: 20,
                        }} source={{ uri: artist?.imageUrl }} />
                  </View>
                  <View style={{ marginStart: 20 }}>
                        <Text style={{
                              fontWeight: "500",
                              fontSize: 22,
                              marginVertical: 15,
                        }}>
                              All Tracks
                        </Text>
                        <View style={{ marginBottom: 480 }}>
                              <FlatList
                                    data={artist?.tracks}
                                    renderItem={renderTracks}
                                    showsVerticalScrollIndicator={false}
                              />
                        </View>
                  </View>
            </SafeAreaView>
      )
}

export default ArtistDetails

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
            bottom: 5,
            right: 5,
      },
      albumImg: {
            width: 70,
            height: 70,
            borderRadius: 3,
            resizeMode: "cover",
      },
      imgContainer: {
            marginBottom: 15,
      },
})