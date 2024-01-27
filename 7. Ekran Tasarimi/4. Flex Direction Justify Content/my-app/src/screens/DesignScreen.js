import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DesignScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>1</Text>
      <Text style={styles.mainText}>2</Text>
      <Text style={styles.mainText}>3</Text>
    </View>
  )
}

export default DesignScreen

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    borderRadius: 20,
    alignItems:"flex-start",
    flexDirection:"column",
    justifyContent:'flex-start',
    height:400
  }, 
  mainText: {
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
    // marginHorizontal:30
    // marginVertical:30
    padding: 20,
    //  paddingHorizontal:20,
    //  paddingVertical:20,
    borderRadius: 10
  }
})