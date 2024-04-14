import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'




export default function Courses({ corsessPriod, courses ,nullText}) {
  let content=<Text>{nullText}</Text>;

  if(courses.length > 0){
    content = <CoursesList Courses={courses} /> 
  } 
  return (
    <View style={styles.container}>
      <CoursesSummary Courses={courses} periodName={corsessPriod} />
      {content}
   
    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 25,
    paddingTop: 25,
    marginBottom: 25,
  }
})