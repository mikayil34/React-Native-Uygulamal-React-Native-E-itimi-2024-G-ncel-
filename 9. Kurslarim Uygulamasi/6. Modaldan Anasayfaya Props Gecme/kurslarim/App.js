import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false)
  const startModal = () => {
    setModelIsVisible(true);
  }
  const endModal = () => {
    setModelIsVisible(false);
  }
  const addCourse = (coursTitle) => {  

    
    endModal();
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color='red' onPress={startModal} />
        <CourseInput visible={modelIsVisible} onAddCourse={addCourse}  onCancel={endModal}/>
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
  },
});
