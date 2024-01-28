import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const id = route.params.id;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data);
  }
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result)
    return;
  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <FlatList   data={result.photos}
        renderItem={({ item }) => {

          return ( 
            <Image style={styles.image} source={ { uri: item} } />
       
          )
        }}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({ 
  image: {
  width: 250,
  height: 120,
  borderRadius: 8,
  marginBottom: 5
},})