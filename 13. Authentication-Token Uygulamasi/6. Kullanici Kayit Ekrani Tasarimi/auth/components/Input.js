import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Input({ Label, keyboardType, onUpdateValue, value,secure }) {
  return (
    <View style={styles.InputContainer}>
      <Text style={styles.label}>{Label}</Text>
      <TextInput style={styles.input}
        autoCapitalize='none'
        secureTextEntry={secure}
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  InputContainer:{
marginVertical:8,

  },label:{
color:'white',
marginBottom:3,

  },
  input:{
    backgroundColor:'pink',
    paddingVertical:8,
    paddingHorizontal:10,
    borderRadius:20,
    fontSize:16,

  }
})