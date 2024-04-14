import { StyleSheet, View, Text } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { EvilIcons } from '@expo/vector-icons';

import { CoursesContext } from '../stor/CoursesContext';
import CoursForm from '../components/CoursForm';


export default function ManageCourses({ route, navigation }) {
  const CoursId = route.params?.CoursId;
  const coursesContext = useContext(CoursesContext);
  let IsEdting = CoursId ? true : false;
const selectedCourse = coursesContext.courses.find(course => course.id === CoursId);
  
  useLayoutEffect(() => {
    navigation.setOptions({ 
      title: IsEdting ? 'Kursu Güncelle' : 'Kurs Ekle',

    }, [navigation, IsEdting])
  });
  function deleteCourse() {
    coursesContext.deleteCourse(CoursId);
    navigation.goBack();
  };
  function addorUpdateHandler(courseData) {
   
    if (IsEdting) {
      coursesContext.updateCourse(CoursId, courseData);
    } else {
      coursesContext.addCourse(courseData);
    }
    navigation.goBack();
  }
  function cancelHandler() {

    navigation.goBack();
  }
  return (

    <View style={styles.container}>
      <CoursForm 
      cancelHandler={cancelHandler} 
      onSubmit={addorUpdateHandler} 
        IsEdting={IsEdting}
        defaultvalue={selectedCourse}
        />
     
      {IsEdting && <View style={styles.deleteContainer}>
        <EvilIcons name="trash" size={36} color="black" onPress={deleteCourse} />
      </View>}
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 25,
  }, deleteContainer: {
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: 'blue',
    paddingTop: 10,
    marginTop: 16,

  },

})