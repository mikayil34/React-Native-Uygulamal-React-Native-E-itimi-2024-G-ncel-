import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Courses from '../components/Courses'
import { CoursesContext } from '../stor/CoursesContext';
import { gekLastWeeek } from '../helper/date';
 
export default function RecentCourses() {
  const coursesContext= useContext(CoursesContext);

  const recentCourses = coursesContext.courses.filter((courses)=>{
    const today = new Date();
    const dateLastWeek = gekLastWeeek(today,7); 
    return courses.date > dateLastWeek && courses.date <= today;
  });

  return (
    <Courses courses={recentCourses} corsessPriod="Son 1 Hafta"/>
  )
}

const styles = StyleSheet.create({})