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
  return (

    <View style={styles.container}>
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

  }

})