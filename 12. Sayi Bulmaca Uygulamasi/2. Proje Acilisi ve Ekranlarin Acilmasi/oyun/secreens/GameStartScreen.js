import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const GameStartScreen = () => {
  return (
    <View>
      <Text>Sayı Tahmin Uygulaması</Text>
      <CustomButton>Temizle</CustomButton>
      <CustomButton>Onayla</CustomButton>
       
    </View>
  )
}

export default GameStartScreen

const styles = StyleSheet.create({})