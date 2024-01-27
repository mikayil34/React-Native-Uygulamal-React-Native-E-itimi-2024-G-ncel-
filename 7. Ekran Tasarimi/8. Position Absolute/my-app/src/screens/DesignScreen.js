import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DesignScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainTextOne}>1</Text> 
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
    
    // flexDirection:'row',
    height: 400
  },
  mainTextOne: {
    borderWidth: 1,
    borderColor: "red",
    // margin: 10,
    padding: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
    position:'absolute',
    // top:20,
    left:5,
    bottom:0,
    // right:0,
    // top:0
    // flex:4
  },
  // mainTextTwo: {
  //   borderWidth: 1,
  //   borderColor: "red",
  //   margin: 10,
  //   padding: 20,
  //   borderRadius: 10,
  //   // flex:5,
  //   // top:10,
  //   // left:40,
  //   bottom: 10,
  //   right: 40

  // },
  // mainTextThree: {
  //   borderWidth: 1,
  //   borderColor: "red",
  //   margin: 10,
  //   padding: 20,
  //   borderRadius: 10,
  //   // flex:1
  // }
})