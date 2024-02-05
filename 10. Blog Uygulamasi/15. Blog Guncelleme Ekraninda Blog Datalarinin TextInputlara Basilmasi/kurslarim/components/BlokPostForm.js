import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BlokPostForm = ({onSubmit,initilValues}) => {
  const [title, setTitle] = useState(initilValues?initilValues.title:'');
  const [content, setContent] = useState(initilValues?initilValues.content:'')

  return (
    <View style={styles.main}>
      <Text style={styles.label}>Başlığı Giriniz</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>İçeriği Giriniz</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity style={styles.buttonmain} onPress={()=>onSubmit(title,content)}>
        <View style={styles.buttonview}>
          <Text style={styles.buttontext}>Kaydet</Text>
        </View>


      </TouchableOpacity>
    </View>
  )
}

export default BlokPostForm

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,

  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    padding: 5,
    fontSize: 18,
    marginBottom: 15,

  },
  buttonview: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

  },
  buttontext: {
    color: 'white',
    fontSize: 20,

  },
  buttonmain: {
    padding: 30
  }
})