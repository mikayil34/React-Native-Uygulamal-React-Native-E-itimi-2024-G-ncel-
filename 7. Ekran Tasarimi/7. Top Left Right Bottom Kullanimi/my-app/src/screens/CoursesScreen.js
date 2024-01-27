import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
  const Courses=[
    {name:"C",id:1  },
   {name:"Angular",id:2  },
    {name:"React",id:3  },
     {name:"Bootstrap",id:4  } 
    
  ];
  return (
    <FlatList data={Courses} 
    //horizontal
    //showsHorizontalScrollIndicator={false}
     style={styles.content}  renderItem={({item})=>{
      return <Text style={styles.itemText} key={item.id} >{item.name} </Text>
    }} /> 
  )
}

const styles = StyleSheet.create({
  itemText: {
   backgroundColor: '#f9c2ff',
   padding: 20,
   fontSize: 20, 
   marginVertical: 5,
   marginHorizontal: 5,
 },content:{
   marginVertical: 22,
 }
});