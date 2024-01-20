import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
  const Courses=[
    {name:"c#",id:1  },
   {name:"boostrap",id:2  },
    {name:"react",id:3  },
     {name:"html1",id:4  },
     {name:"html2",id:5  },
     {name:"html3",id:6  },
     {name:"html4",id:7  },
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