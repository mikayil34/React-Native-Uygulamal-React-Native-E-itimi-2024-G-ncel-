import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
 
const GameScreen = () => {
  return (
    <View style={styles.container}> 
      <Title>Bilgisayar Tahmini </Title>
     <View>
      <Text>Altında mı? Üstünde Mi?</Text>
     </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
})