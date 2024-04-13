import { StyleSheet, View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
export default function ManageCourses({ route, navigation }) {
  const CoursId = route.params?.CoursId;

  let IsEdting = CoursId ? true : false;

  useLayoutEffect(() => {
    navigation.setOptions({

      title: IsEdting ? 'Kursu Güncelle' : 'Kurs Ekle',

    }, [navigation, IsEdting])
  });
  function deleteCourse() {
    navigation.goBack();

  };

  function cancelHandler() {

    navigation.goBack();
  }
  return (

    <View style={styles.container}>
      <View style={styles.buttons}>

        <Pressable style={({ pressed }) => pressed && styles.pressed}  onPress={cancelHandler} >
          <View style={styles.cancel}>
            <Text style={styles.cancelText}>
              iptal Et
            </Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => pressed && styles.pressed}  >
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