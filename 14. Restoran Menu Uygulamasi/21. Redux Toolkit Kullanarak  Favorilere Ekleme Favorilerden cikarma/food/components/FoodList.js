import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import FoodItem from './FoodItem'

export default function FoodList({displayedfoods}) {

    function renderFoodItem(itemData){
    
        const foodItepProps={
          id:itemData.item.id, 
            categoryIds:itemData.item.categoryIds,
            title:itemData.item.title,
            affordability:itemData.item.affordability,
            complexity:itemData.item.complexity,
            imageUrl:itemData.item.imageUrl,
            ingredients:itemData.item.ingredients
        }
      return <FoodItem {...foodItepProps} /> 
      }


  return (
    <View>
    <FlatList
    data={displayedfoods} 
    keyExtractor={(item)=>item.id}
   renderItem={renderFoodItem}
    />
   </View>
  )
}

const styles = StyleSheet.create({})




 