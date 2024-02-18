import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComputerNumber = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertext}>{children}</Text>
    </View>
  )
}

export default ComputerNumber

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'yellow',
        padding:25,
        alignItems:'center',
        borderRadius:20,


    },numbertext:{
        fontSize:36,
        color:'yellow',
        
    }
})