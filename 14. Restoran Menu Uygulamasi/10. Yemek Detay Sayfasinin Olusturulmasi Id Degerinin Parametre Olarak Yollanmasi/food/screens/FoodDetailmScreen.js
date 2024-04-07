import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
export default function FoodDetailmScreen({  route }) {


    const { Foodid, FoodcategoryIds, Foodtitle,Foodaffordability,Foodcomplexity,FoodimageUrl} = route.params;

         
return (
    <View>
      <Text>{Foodtitle}</Text>
      <Text>{Foodaffordability}</Text>
      <Text>{Foodcomplexity}</Text>
      <Image style={styles.image} source={{ uri: FoodimageUrl }} />
       
    </View>
  )
}

const styles = StyleSheet.create({  
    image: {
    width: '100%',
    height: 200, 
},
})