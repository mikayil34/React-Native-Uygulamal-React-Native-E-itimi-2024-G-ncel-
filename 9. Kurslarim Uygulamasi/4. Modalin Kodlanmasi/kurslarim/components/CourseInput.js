import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const CourseInput = ({ visible }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View>
      <Modal
        animationType="slide"
        visible={visible}
      >
        <View style={styles.centeredView}>
          <Image style={styles.modelImage} source={require('../assets/images/logo.jpg')} />
          <TextInput style={styles.modalTextInput} placeholder='Yeni Kurs Ekle' />
          <View style={styles.modalButtonContainer}>
            <View style={styles.button}>
              <Button color='red' title='İptal et' /> 
            </View>
            <View>
              <Button color='blue' title='Ekle' /> 
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default CourseInput

const styles = StyleSheet.create({
  centeredView: {
    margin: 50, 
  }, 
  modalTextInput: { borderWidth: 2 }, 
  button: {

  },
  modalButtonContainer: {
    
  },
  modelImage: {
    width: 250, 
    height: 150,

  }
})