import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false)
  const [courses, setCourses] = useState([])
  const startModal = () => {
    setModelIsVisible(true);
  }
  const endModal = () => {
    setModelIsVisible(false);
  }
  const addCourse = (coursTitle) => {
    setCourses((currentCourss) => [
      ...currentCourss,
      { text: coursTitle, id: Math.random().toString() }
    ]);


    endModal();
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color='red' onPress={startModal} />
        <CourseInput visible={modelIsVisible} onAddCourse={addCourse} onCancel={endModal} />
        <FlatList data={courses} renderItem={({ item }) => {

          return (
            <View style={styles.courseItem}>
              <Text style={styles.coursetext}>{item.text}</Text>
            </View>)
        }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20
  }, courseItem: {
    backgroundColor: 'gray',
    margin: 8,

  }, coursetext: {
    padding: 8,
    color: 'white'
  }
});
