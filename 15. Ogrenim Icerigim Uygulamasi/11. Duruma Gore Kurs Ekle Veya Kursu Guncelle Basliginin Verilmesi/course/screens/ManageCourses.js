import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function ManageCourses({ route, navigation }) {
  const CoursId = route.params?.CoursId;

  let IsEdting = CoursId ? true : false;

  useLayoutEffect(() => {
    navigation.setOptions({

      title: IsEdting ? 'Kursu Güncelle' : 'Kurs Ekle'

    }, [navigation, IsEdting])
  });

  return (

    <View>
      <Text>ManageCourses</Text>
    </View>
  )
}