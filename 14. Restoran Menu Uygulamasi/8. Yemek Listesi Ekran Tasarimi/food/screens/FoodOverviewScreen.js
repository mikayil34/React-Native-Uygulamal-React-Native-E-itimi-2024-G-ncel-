import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data'
import FoodItem from '../components/FoodItem';
 
export default function FoodOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  const displayedfoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });



function renderFoodItem(itemData){
  console.log(itemData.item); 
  const foodItepProps={
    id:itemData.item.id, 
      categoryIds:itemData.item.categoryIds,
      title:itemData.item.title,
      affordability:itemData.item.affordability,
      complexity:itemData.item.complexity,
      imageUrl:itemData.item.imageUrl,
      ingredients:itemData.item.ingredients
  }
return <FoodItem  {...foodItepProps} /> 
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