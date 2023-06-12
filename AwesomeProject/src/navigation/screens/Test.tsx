import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';

const Test = () => {

      const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/artist/2993',
            headers: {
                  'X-RapidAPI-Key': '1333939475mshff59c1c054a516dp1da4fdjsnd8e64c9124bf',
                  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
      };


      const getDatasFromDeezer = async () => {
            try {
                  const response = await axios.request(options);
                  console.log(response.data.nb_album, 'response.data.name');
                  // response.data.map((item: any) => {
                  //       console.log(item.data, 'item.title');
                  // })
            } catch (error) {
                  console.log(error);
            }
      }

      useEffect(() => {

            getDatasFromDeezer();
      }, [])


      return (
            <SafeAreaView>
                  <Text>Test</Text>
            </SafeAreaView>
      )
}

export default Test

const styles = StyleSheet.create({})