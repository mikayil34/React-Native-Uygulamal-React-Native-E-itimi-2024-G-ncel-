import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ResulDetail = ({result}) => {
    console.log(result); 
  return (
    <View>
        <Image style={{
            width:250,
            height:120
    }} source={result.image_url? {uri:result.image_url}:null}/>
      <Text>{result.name}</Text>
      <Text>{result.rating} yıldızlı restorant,{result.review_count} değerlendirme </Text>
    </View>
  )
}

export default ResulDetail

const styles = StyleSheet.create({})