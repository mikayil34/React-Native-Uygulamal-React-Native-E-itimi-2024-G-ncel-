import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesSummary from './CoursesSummary'
import CoursesList from './CoursesList'



 
export default function Courses({corsessPriod}) {
  return (
    <View style={styles.container}> 
    <CoursesSummary Courses={COURSES} periodName={corsessPriod}/>
    <CoursesList Courses={COURSES} />
    </View>
  
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#f9f9f9',
        paddingHorizontal:25,
        paddingTop :25, 
        marginBottom:25,
    }
})