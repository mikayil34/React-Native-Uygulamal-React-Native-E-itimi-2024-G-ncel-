import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import FoodList from '../components/FoodList';
import { FavoritesContext } from '../store/favoritescontext';
import { FOODS } from '../data/dummy-data';

export default function FavoritesScreen() {

  const favoriteFoodContext = useContext(FavoritesContext);
  const displayedfoods = FOODS.filter((foodItem) => favoriteFoodContext.ids.includes(foodItem.id));
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