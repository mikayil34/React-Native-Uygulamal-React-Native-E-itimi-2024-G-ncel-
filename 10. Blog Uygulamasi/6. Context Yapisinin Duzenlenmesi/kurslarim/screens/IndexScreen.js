import { StyleSheet, Text, View ,FlatList,Button} from 'react-native'
import React ,{useContext}from 'react'
import  {Context} from '../context/BlogContext'

const IndexScreen = () => {
 const {state,addBlogPost}= useContext(Context)
  return (
    <View>

      <Button title='Ekle' onPress={addBlogPost} /> 
      <FlatList data={state} 
      keyExtractor={blockPost=>blockPost.title} 
      renderItem={({item})=>{
        return <Text> {item.title}</Text>
      }}
      /> 
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({})