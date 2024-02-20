import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComputerGuess = ({roundNumber,guess}) => {
  return (
    <View style={styles.container}>
      <Text>{roundNumber}</Text>
      <Text> inci tahmin: </Text>
      <Text>{guess}</Text>
    </View>
  )
}

export default ComputerGuess

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        
    }
})