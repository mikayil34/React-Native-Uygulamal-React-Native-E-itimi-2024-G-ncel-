import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResulDetail from './ResulDetail';

const ResultsList = ({ results, title }) => {
  console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {

          return (
            <TouchableOpacity>
              <ResulDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }, title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,

  }

})