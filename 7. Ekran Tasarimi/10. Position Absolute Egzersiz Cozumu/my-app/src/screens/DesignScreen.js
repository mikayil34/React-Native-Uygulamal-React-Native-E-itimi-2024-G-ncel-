import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DesignScreen = () => {
  return (
    <View style={{ width: '100%', height: '100%' }} >
      <View style={{ width: '25%', height: '25%', backgroundColor: 'red' }} />
      <View style={{
        width: '25%',
        height: '25%',
         backgroundColor:
          'blue',
           position: 'absolute',
           right:0,
           top:0
      }} />
       <View style={{
        width: '25%',
        height: '25%',
         backgroundColor:
          'green',
           position: 'absolute',
           left:0,
           bottom:0
      }} />
 <View style={{
        width: '25%',
        height: '25%',
         backgroundColor:
          'yellow',
           position: 'absolute',
           right:0,
           bottom:0
      }} />
    </View>
  )
}

export default DesignScreen

const styles = StyleSheet.create({})