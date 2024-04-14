import { StyleSheet, View, Text } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { CoursesContext } from '../stor/CoursesContext';
import CoursForm from '../components/CoursForm';


export default function ManageCourses({ route, navigation }) {
  const CoursId = route.params?.CoursId;
  const coursesContext = useContext(CoursesContext);
  let IsEdting = CoursId ? true : false;

  useLayoutEffect(() => {
    navigation.setOptions({

      title: IsEdting ? 'Kursu Güncelle' : 'Kurs Ekle',

    }, [navigation, IsEdting])
  });
  function deleteCourse() {
    coursesContext.deleteCourse(CoursId);
    navigation.goBack();
  };
  function addorUpdateHandler() {
    if (IsEdting) {
      coursesContext.updateCourse(CoursId, { description: "Güncellendi", amount: 12, date: new Date('2024-04-11') });
    } else {
      coursesContext.addCourse("Yeni Kurs", 122, new Date());
    }
    navigation.goBack();
  }
  function cancelHandler() {

    navigation.goBack();
  }
  return (

    <View style={styles.container}>
      <CoursForm />
      <View style={styles.buttons}>

        <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={cancelHandler} >
          <View style={styles.cancel}>
            <Text style={styles.cancelText}>
              iptal Et
            </Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={addorUpdateHandler} >
          <View style={styles.addOrDelete}>
            <Text style={styles.addOrDeleteText}>
              {IsEdting ? 'Güncelle' : 'Ekle'}
            </Text>
          </View>
        </Pressable>

      </View>
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
  },
  deleteContainer: {
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: 'blue',
    paddingTop: 10,
    marginTop: 16,

  }, pressed: {
    opacity: 0.5

  }, buttons: {
    flexDirection: 'row',
    justifyContent: 'center',

  }, cancel: {
    backgroundColor: 'red',
    minWidth: 120,
    marginRight: 10,
    padding: 10,
    alignContent: 'center',
  }, cancelText: {
    color: 'white',
    textAlign: 'center'
  }, addOrDelete: {
    backgroundColor: 'green',
    minWidth: 120,
    padding: 10,
    alignContent: 'center',
  }, addOrDeleteText: {
    color: 'white',
    textAlign: 'center'
  }

})