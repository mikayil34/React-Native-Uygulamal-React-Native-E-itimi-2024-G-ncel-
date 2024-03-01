import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Input({
  Label,
   keyboardType,
  onUpdateValue,
   value,
    secure,
    isInvalid 
  }) {
    console.log('Label:'+Label ,"isInvalid: "+isInvalid) 
  return ( 

    <View style={styles.InputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{Label}</Text>
      <TextInput style={[styles.input,isInvalid && styles.InputInvalid]}
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
  InputContainer: {
    marginVertical: 8,

  }, label: {
    color: 'white',
    marginBottom: 3, 
  },InputInvalid:{
backgroundColor:'red'
  },
  input: {
    backgroundColor: 'pink',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 16,

  }, labelInvalid: {
    color: 'red',
  }
})