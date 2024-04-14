import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Courses from '../components/Courses'
import { CoursesContext } from '../stor/CoursesContext';
import { gekLastWeeek } from '../helper/date';
import { getCourses } from '../helper/http';

export default function RecentCourses() {
  
   const coursesContext = useContext(CoursesContext);
   
  useEffect(() => {

    async function takeCoursses() {
      const Courses = await getCourses();
      coursesContext.setCourses(Courses);
    }
    takeCoursses();

  }, []);

  const recentCourses = coursesContext.courses.filter((courses) => {
    const today = new Date();
    const dateLastWeek = gekLastWeeek(today, 7);
    return courses.date > dateLastWeek && courses.date <= today;
  });

  return (
    <Courses courses={recentCourses} corsessPriod="Son 1 Hafta" />
  )
}

const styles = StyleSheet.create({})