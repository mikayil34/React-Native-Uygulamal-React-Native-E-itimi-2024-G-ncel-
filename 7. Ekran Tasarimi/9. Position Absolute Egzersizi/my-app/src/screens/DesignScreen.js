import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DesignScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainTextOne}>1</Text> 
      <Text style={styles.mainTextTwo}>2</Text> 
      <Text style={styles.mainTextThree}>3</Text> 
      <Text style={styles.mainTextFour}>4</Text> 
    </View>
  )
}

export default DesignScreen

const styles = StyleSheet.create({
  mainView: {
    
    margin: 0, 
    // flexDirection:'row',
    height: 800
  },
  mainTextOne: {
    borderWidth: 1,
    borderColor: "red",
     margin: 0,
    padding: 20, 
    alignSelf: 'flex-start',
    position:'absolute',
      top:0,
      height:200,
      backgroundColor:'red'
    // left:5,
    // bottom:0,
    // right:0,
    // top:0
    // flex:4
  },
  mainTextTwo: {
    borderWidth: 1,
    borderColor: "blue",
    alignSelf: 'flex-end',
    position:'absolute',
    backgroundColor:'blue',
    margin: 0,
    padding: 20, 
    right:0, 
    height:200,
  },
  mainTextThree: {
    borderWidth: 1,
    borderColor: "green",
    alignSelf: 'flex-start',
    position:'absolute',
    backgroundColor:'green',
    margin: 0,
    padding: 20, 
    bottom:0, 
    height:200,
  },
  mainTextFour: {
    borderWidth: 1,
    borderColor: "yellow",
    alignSelf: 'flex-end',
    position:'absolute',
    backgroundColor:'yellow',
    margin: 0,
    padding: 20, 
    bottom:0,
    right:0, 
    height:200,
  },
})