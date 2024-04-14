import { StyleSheet, View, Text } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'


import { CoursesContext } from '../stor/CoursesContext';
import CoursForm from '../components/CoursForm';
import { storeCourse, updateCourse ,eleteCourseHtpp} from '../helper/http';
import LoadingSpinner from '../components/LoadingSpinner';


export default function ManageCourses({ route, navigation }) {

  const [isSubmitting, setIsSubmitting] = useState(false);


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
    coursesContext.deleteCourse(CoursId);  
    await eleteCourseHtpp(CoursId);
    setIsSubmitting(false);

    navigation.goBack();
  };

  async function addorUpdateHandler(courseData) {
    setIsSubmitting(true);
    if (IsEdting) {
      coursesContext.updateCourse(CoursId, courseData);
      await updateCourse(CoursId, courseData);

    } else {
      const id = await storeCourse(courseData); 
      coursesContext.addCourse({ ...courseData, id:id });
    }
    setIsSubmitting(false);
    navigation.goBack();
  }
  function cancelHandler() {

    navigation.goBack();
  }

  if(isSubmitting){

    return  LoadingSpinner();
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