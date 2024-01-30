import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const CourseInput = ({ visible, onAddCourse,onCancel }) => {
  const [enterCoursText, setEnterCoursText] = useState('');
  const addCoursHanler = () => {
    onAddCourse(enterCoursText)
    setEnterCoursText('')
  }
  const courseInputHandler = (enterText) => {
    setEnterCoursText(enterText)
  }

  return (
    <View>
      <Modal
        animationType="slide"
        visible={visible}
      >
        <View style={styles.inputContainer}>
          <Image style={styles.modelImage} source={require('../assets/images/logo.jpg')} />
          <TextInput 
          value={enterCoursText} 
          onChangeText={courseInputHandler}
           style={styles.modalTextInput}
            placeholder='Yeni Kurs Ekle'
             />
          <View style={styles.modalButtonContainer} >
            <View style={styles.button}>
              <Button color='red' title='İptal et' onPress={onCancel} />
            </View>
            <View style={styles.button}>
              <Button color='blue' onPress={addCoursHanler} title='Ekle' />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default CourseInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 15
  },
  modalTextInput: {
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'pink',
    borderColor: 'pink'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  modalButtonContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  modelImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,

  }
})