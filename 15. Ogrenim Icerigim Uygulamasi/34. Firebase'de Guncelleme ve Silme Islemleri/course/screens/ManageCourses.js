import { StyleSheet, View, Text } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'


import { CoursesContext } from '../stor/CoursesContext';
import CoursForm from '../components/CoursForm';
import { storeCourse, updateCourse ,eleteCourseHtpp} from '../helper/http';


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
  async function deleteCourse() {
    coursesContext.deleteCourse(CoursId); 

    await eleteCourseHtpp(CoursId);
    navigation.goBack();
  };
  async function addorUpdateHandler(courseData) {

    if (IsEdting) {
      coursesContext.updateCourse(CoursId, courseData);
      await updateCourse(CoursId, courseData);

    } else {
      const id = await storeCourse(courseData);
console.log(id) ;

      coursesContext.addCourse({ ...courseData, id:id });
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