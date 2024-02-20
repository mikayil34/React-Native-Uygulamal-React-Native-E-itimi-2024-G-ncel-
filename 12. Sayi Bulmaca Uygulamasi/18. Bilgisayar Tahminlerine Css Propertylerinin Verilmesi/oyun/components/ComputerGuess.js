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
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'yellow',
        marginVertical:10,
        borderRadius:30,
padding:15,
elevation: 4,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    }
})