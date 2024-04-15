import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Courses from '../components/Courses'
import { CoursesContext } from '../stor/CoursesContext';
import { gekLastWeeek } from '../helper/date';
import { getCourses } from '../helper/http';
import LoadingSpinner from '../components/LoadingSpinner';
import ErorrText from '../components/ErorrText';

export default function RecentCourses() {

  const coursesContext = useContext(CoursesContext);
  const [isFatching, setIsFatching] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setIsFatching(false);
    setError(null);

    async function takeCoursses() { 
      setIsFatching(false); 
      try {
        const Courses = await getCourses();
        coursesContext.setCourses(Courses);
 
      } catch (error) {
       
        setError("Kursları Çekemedik");
        setIsFatching(false);
      } 
    } 
    takeCoursses();

  }, []);
  if (isFatching) {
    return LoadingSpinner();
  }
  if (error && !isFatching) {
    
    return <ErorrText errorMesaje={error} />
  }
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