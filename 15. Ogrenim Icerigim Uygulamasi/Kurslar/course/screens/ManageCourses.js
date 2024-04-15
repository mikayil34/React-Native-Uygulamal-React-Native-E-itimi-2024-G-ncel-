import { StyleSheet, View, Text } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'


import { CoursesContext } from '../stor/CoursesContext';
import CoursForm from '../components/CoursForm';
import { storeCourse, updateCourse, deleteCourseHtpp } from '../helper/http';
import LoadingSpinner from '../components/LoadingSpinner';
import ErorrText from '../components/ErorrText';


export default function ManageCourses({ route, navigation }) {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null)

  const CoursId = route.params?.CoursId;
  const coursesContext = useContext(CoursesContext);
  let IsEdting = CoursId ? true : false;
  const selectedCourse = coursesContext.courses.find(course => course.id === CoursId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: IsEdting ? 'Kursu Güncelle' : 'Kurs Ekle',

    }, [navigation, IsEdting])
  });
  async function deleteCourse() {
    setIsSubmitting(true);
    setError(null);
    coursesContext.deleteCourse(CoursId);
    try {
      await deleteCourseHtpp(CoursId);
      setIsSubmitting(false);
      navigation.goBack();
    } catch (error) {
      setIsSubmitting(false);
      setError("Kursu Silemedik");
    }

  };

  async function addorUpdateHandler(courseData) {
    setIsSubmitting(true);
    setError(null)
    try {
      if (IsEdting) {
        coursesContext.updateCourse(CoursId, courseData);
        await updateCourse(CoursId, courseData);
  
      } else {
        const id = await storeCourse(courseData);
        coursesContext.addCourse({ ...courseData, id: id });
      }
      setIsSubmitting(false);
      navigation.goBack();
    } catch (error) {
      setIsSubmitting(false);
      setError("Kursu Güncellenemedi");
    }
    
  }
  function cancelHandler() {

    navigation.goBack();
  }

  if (isSubmitting) {

    return LoadingSpinner();
  }
  if (error && !isSubmitting) {

    return <ErorrText errorMesaje={error} />
  }

  return (

    <View style={styles.container}>
      <CoursForm
        cancelHandler={cancelHandler}
        onSubmit={addorUpdateHandler}
        deleteCourse={deleteCourse}
        IsEdting={IsEdting}
        defaultvalue={selectedCourse}
      />
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 25,
  }

})