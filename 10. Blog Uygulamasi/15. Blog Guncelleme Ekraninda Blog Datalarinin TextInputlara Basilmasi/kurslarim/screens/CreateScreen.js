import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlokPostForm from '../components/BlokPostForm'
import { Context } from '../context/BlogContext'
const CreateScreen = ({navigation}) => {
 const {addBlogPost}= useContext(Context);

  return ( 
      <BlokPostForm 
       onSubmit={(title,content)=>{
        addBlogPost(title,content,()=> navigation.navigate('Index'));

      }}/>  
  )
}

export default CreateScreen

const styles = StyleSheet.create({})