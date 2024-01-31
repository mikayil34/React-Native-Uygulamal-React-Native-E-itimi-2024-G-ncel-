import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React ,{useContext}from 'react'
import BlockContext from '../context/BlogContext'

const IndexScreen = () => {
 const blockPosts= useContext(BlockContext)
  return (
    <View>

      {/* <Text>IndexScreen  </Text>  */}
      <FlatList data={blockPosts} 
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