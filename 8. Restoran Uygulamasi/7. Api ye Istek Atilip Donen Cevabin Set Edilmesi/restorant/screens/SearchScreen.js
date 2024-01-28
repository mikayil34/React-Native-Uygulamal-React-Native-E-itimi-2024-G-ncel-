import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
 

const SearchScreen = () => {
  const [searchApi,results]=useResults();
  console.log(results);
  
  return (
    <View>
     <SearchBar/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})