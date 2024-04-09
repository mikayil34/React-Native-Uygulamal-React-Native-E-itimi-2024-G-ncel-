import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS,CATEGORIES } from '../data/dummy-data'
import FoodItem from '../components/FoodItem';
import FoodList from '../components/FoodList';
 
export default function FoodOverviewScreen({ route,navigation }) {
  const categoryId = route.params.categoryId;
  const displayedfoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });
useLayoutEffect(()=>{const catagorititle= CATEGORIES.find((cat)=>cat.id===categoryId).title; 
  navigation.setOptions({title:catagorititle});  },
  [navigation,categoryId]);



  return (
    <FoodList displayedfoods={displayedfoods} />
    
  )
}

const styles = StyleSheet.create({})