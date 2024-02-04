import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BlokPostForm = () => {
  const [title, setTitle] = useState('') ;
  const [content, setContent] = useState('')
   
  return (
    <View>
      <Text>Başlığı Giriniz</Text>
      <TextInput
       value={title}
       onChangeText={(text)=>setTitle(text)}
      /> 
      <Text>İçeriği Giriniz</Text>
      <TextInput
       value={content}
      onChangeText={(text)=>setContent(text)}
      /> 
      <TouchableOpacity>
        <Text>Kaydet</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BlokPostForm

const styles = StyleSheet.create({})