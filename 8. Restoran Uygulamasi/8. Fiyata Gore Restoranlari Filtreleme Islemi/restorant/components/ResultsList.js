import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultsList = ({results,title}) => {
    console.log(results); 
  return (
    <View>
      <Text>{title}</Text> 
       
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({})