import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CourseInput = ({visible}) => {
  return (
    <View>
      <Text>{visible?"evet":"hayır"}</Text>
    </View>
  )
}

export default CourseInput

const styles = StyleSheet.create({})