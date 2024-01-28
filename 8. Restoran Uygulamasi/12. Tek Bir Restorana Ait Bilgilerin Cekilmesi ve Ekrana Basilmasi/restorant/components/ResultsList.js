import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResulDetail from './ResulDetail';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ results, title }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {

          return (
            <TouchableOpacity onPress={() =>
              navigation.navigate("ResultsShow", { id: item.id })
            }>
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