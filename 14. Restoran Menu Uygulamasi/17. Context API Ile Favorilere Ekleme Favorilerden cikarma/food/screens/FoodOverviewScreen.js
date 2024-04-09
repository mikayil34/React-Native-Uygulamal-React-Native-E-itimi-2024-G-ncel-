import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS,CATEGORIES } from '../data/dummy-data'
import FoodItem from '../components/FoodItem';
 
export default function FoodOverviewScreen({ route,navigation }) {
  const categoryId = route.params.categoryId;
  const displayedfoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });
useLayoutEffect(()=>{const catagorititle= CATEGORIES.find((cat)=>cat.id===categoryId).title; 
  navigation.setOptions({title:catagorititle});  },
  [navigation,categoryId]);


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