import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ColorChange({color,OnIncrease,OnDecrease}) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`${color} Artır`} onPress={()=>OnIncrease()} />
      <Button title={`${color} Azalt`} onPress={()=>OnDecrease()}/>
    </View>
  )
}

const styles = StyleSheet.create({})