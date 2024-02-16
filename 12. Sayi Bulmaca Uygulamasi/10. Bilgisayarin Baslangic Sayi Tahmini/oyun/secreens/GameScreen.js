import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import ComputerNumber from '../components/ComputerNumber'
 
const GameScreen = ({ userNumber }) => {

  const initialGaesse = generalNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGaesse);

  function generalNumber   (min, max, exclude)   {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (exclude === randomNumber) {
      return  Math.floor(Math.random() * (max - min)) + min;
    }else{
      return randomNumber;
    } 
  }
  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini </Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
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