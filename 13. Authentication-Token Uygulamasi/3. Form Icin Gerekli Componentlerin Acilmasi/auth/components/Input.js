import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Input({ Label, keyboardType, onUpdateValue, value,secure }) {
  return (
    <View>
      <Text>{Label}</Text>
      <TextInput
        autoCapitalize='none'
        secureTextEntry={secure}
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({})