import {ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container:{
flex:1,
alignItems:'center',
justifyContent:'center'
},
text:{
fontSize:16,
marginBottom:10,

}
});
