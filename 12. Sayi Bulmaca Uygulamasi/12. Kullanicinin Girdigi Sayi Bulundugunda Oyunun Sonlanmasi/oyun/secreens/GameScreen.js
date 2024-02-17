import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ComputerNumber from '../components/ComputerNumber'
import CustomButton from '../components/CustomButton'
let minNumber = 1;
let maxNumber = 100;
 
const GameScreen = ({ userNumber ,OnGameOver}) => {
 
useEffect(()=>{
  if(currentGuess===userNumber){

    OnGameOver()
  }
})
  const generalNumber = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (exclude === randomNumber) {
      return Math.floor(Math.random() * (max - min)) + min;
    } else {
      return randomNumber;
    }
  }
  const initialGaesse = generalNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGaesse);



  const nextGuessHAndler = (direction) => {

    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Hadi oradan!!!', 'Yanlış olduğunu bilebile Basıyorsun', [{ text: "tamam", style: 'cancel' }])
      return;
    }


    if (direction === 'lower') {
      maxNumber = currentGuess;

    }
    if (direction === 'greater') {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generalNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini </Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View>
        <Text>Altında mı? Üstünde Mi?</Text>
        <View>
          <CustomButton onPress={nextGuessHAndler.bind(this, 'lower')}>-</CustomButton>
          <CustomButton onPress={nextGuessHAndler.bind(this, 'greater')}>+</CustomButton>

        </View>
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