import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function CategoryGrid({ title, color,pressFood }) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
      style={({pressed})=>[styles.button,pressed? styles.buttonPress:null]} 
      onPress={pressFood}
      >
        <View style={[styles.insideView,{backgroundColor:color}]}>
        <Text style={styles.title}>{title}</Text>
        </View> 
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height:150,
    elevation: 4,
    margin:15,
    borderRadius:20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    backgroundColor:'white'
  },
  button:{
    flex: 1,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',

  },insideView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  },buttonPress:{
    opacity:0.5
  }
})