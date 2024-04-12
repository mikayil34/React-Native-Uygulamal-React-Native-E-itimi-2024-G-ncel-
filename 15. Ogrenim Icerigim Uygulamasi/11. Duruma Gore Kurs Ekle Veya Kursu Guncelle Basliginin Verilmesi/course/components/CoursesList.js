import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseItem from './CourseItem'
function renderCourseItem(itemData){    
    return(
        <CourseItem  {...itemData.item} /> 
    )

}
export default function CoursesList({Courses}) {
  return (
    <View>
    <FlatList
    data={Courses}
    renderItem={renderCourseItem}
    keyExtractor={(item)=>item.id}

    />
    </View>
  )
}

const styles = StyleSheet.create({})