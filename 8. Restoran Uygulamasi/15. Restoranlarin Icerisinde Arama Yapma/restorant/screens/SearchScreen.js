import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
 

const SearchScreen = () => {
  const [searchApi,results]=useResults(); 
  const [term, setTerm] = useState('')
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
     <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>{
      searchApi(term)
     }} />
     <ResultsList      
        title="Ucuz Restoranlar"
        results={filterResultsByPrice('₺')}
      />
      <ResultsList
        title="Uygun Restoranlar"
        results={filterResultsByPrice('₺₺')}
      />
      <ResultsList
        title="Pahalı Restoranlar"
        results={filterResultsByPrice('₺₺₺')}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})