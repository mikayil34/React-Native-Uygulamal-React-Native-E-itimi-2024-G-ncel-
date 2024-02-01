import { StyleSheet, Text, View ,FlatList,Button} from 'react-native'
import React ,{useContext}from 'react'
import BlockContext from '../context/BlogContext'

const IndexScreen = () => {
 const {data,addBlogPost}= useContext(BlockContext)
  return (
    <View>

      <Button title='Ekle' onPress={addBlogPost} /> 
      <FlatList data={data} 
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