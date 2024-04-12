import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CourseItem({id,description,amount,date}) {
  return (
    <View>
      <Text>{description}</Text>
      <Text>{date.toString()}</Text>
      <Text>{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})