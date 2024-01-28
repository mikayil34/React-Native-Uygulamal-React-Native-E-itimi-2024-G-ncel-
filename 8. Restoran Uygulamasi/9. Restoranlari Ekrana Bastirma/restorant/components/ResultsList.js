import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import ResulDetail from './ResulDetail';
 
const ResultsList = ({results,title}) => {
    console.log(results); 
  return (
    <View>
      <Text>{title}</Text> 
       <FlatList data={results}    
       renderItem={({item})=>{

return ( 
<TouchableOpacity>
<ResulDetail result={item}/> 
</TouchableOpacity>
) }}
       />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({})