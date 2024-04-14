import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Courses from '../components/Courses'
import { CoursesContext } from '../stor/CoursesContext';


export default function AllCourses() {
 const coursesContext= useContext(CoursesContext);

  return (
    <Courses courses={coursesContext.courses} corsessPriod="Hepsi"/>
  )
}

const styles = StyleSheet.create({})