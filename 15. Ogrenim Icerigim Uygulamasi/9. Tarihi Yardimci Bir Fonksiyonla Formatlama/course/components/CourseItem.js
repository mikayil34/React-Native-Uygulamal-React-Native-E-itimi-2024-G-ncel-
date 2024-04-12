import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFormatedDate } from '../helper/date'

export default function CourseItem({id,description,amount,date}) {
  return (
    <View>
      <Text>{description}</Text>
      <Text>{getFormatedDate(date)}</Text>
      <Text>{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({


})