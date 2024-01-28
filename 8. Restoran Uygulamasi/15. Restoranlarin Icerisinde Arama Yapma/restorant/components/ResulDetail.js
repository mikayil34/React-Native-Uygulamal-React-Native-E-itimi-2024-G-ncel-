import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResulDetail = ({ result }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating} >{result.rating} yıldızlı restorant,{result.review_count} değerlendirme </Text>
    </View>
  )
}

export default ResulDetail

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 5
  },
  container: {
    marginLeft: 15
  },
  name: {
    fontWeight: 'bold'
  },
  rating: {
    marginTop: 2,
    fontStyle:'italic'
  }

})