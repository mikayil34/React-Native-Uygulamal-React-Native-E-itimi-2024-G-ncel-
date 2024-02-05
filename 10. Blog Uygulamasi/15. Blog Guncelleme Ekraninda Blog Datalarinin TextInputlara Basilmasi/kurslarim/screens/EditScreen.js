import { StyleSheet, Text, View } from 'react-native'
import BlokPostForm from '../components/BlokPostForm'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

const EditScreen = ({route,navigation}) => {
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  const {editBlogPost}= useContext(Context);

  return ( 
      <BlokPostForm 
      initilValues={{title:blogPost.title,content:blogPost.content}}
      onSubmit={(title,content)=>{
        editBlogPost(title,content,blogPost.id,()=> navigation.navigate('Index'));

      }}
      /> 
     
  )
}

export default EditScreen

const styles = StyleSheet.create({})