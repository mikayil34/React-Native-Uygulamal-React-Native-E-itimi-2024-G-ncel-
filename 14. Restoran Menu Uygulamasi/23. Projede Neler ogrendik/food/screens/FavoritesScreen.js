import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import FoodList from '../components/FoodList'; 
import { FOODS } from '../data/dummy-data';
import { useSelector  } from 'react-redux';

export default function FavoritesScreen() {

  
  const favoriteFoodIds = useSelector((state)=>state.favorteFoods.ids);
    
  const displayedfoods = FOODS.filter((foodItem) => favoriteFoodIds.includes(foodItem.id));
  if (displayedfoods.length === 0 || !displayedfoods) {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoride ürün bulunmamaktadır.</Text>
    </View>
    )
  } else {

    return (


      <FoodList displayedfoods={displayedfoods} />

    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',

  }, container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})