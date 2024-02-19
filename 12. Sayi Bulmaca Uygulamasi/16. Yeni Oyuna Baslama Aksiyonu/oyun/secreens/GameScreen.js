import { StyleSheet, Text, View, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ComputerNumber from '../components/ComputerNumber'
import CustomButton from '../components/CustomButton'
import { AntDesign } from '@expo/vector-icons';
import ComputerGuess from '../components/ComputerGuess'
let minNumber = 1;
let maxNumber = 100;


const GameScreen = ({ userNumber, OnGameOver }) => {
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
  const [geussCount, setGeussCount] = useState([initialGaesse])
  useEffect(() => {
    if (currentGuess === userNumber) {

      OnGameOver(geussCount)
    }
  })
  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);
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
    setGeussCount((x) => [newRandomNumber, ...x]);
  }
  return (
    <View style={styles.container}>
      <Title style={styles.titleContainer}>Bilgisayar Tahmini </Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı? Üstünde Mi?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuessHAndler.bind(this, 'lower')}>
            <AntDesign name="minus" size={24} color="white" />
          </CustomButton>
          <CustomButton onPress={nextGuessHAndler.bind(this, 'greater')}>
            <AntDesign name="plus" size={24} color="white" />
          </CustomButton>

        </View> 
      </View>
      <View style={styles.flatlist}>
          <FlatList
            data={geussCount}
            keyExtractor={(blogPost) => blogPost}
            renderItem={(itemData) => (
              <ComputerGuess  roundNumber={geussCount.length-itemData.index} guess={itemData.item}/>
            ) }
          />
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop:12,
    
  }, buttonsContainer: {
    flexDirection: 'row',
  }, card: {
    backgroundColor: 'orange',
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

  }, title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 15,

  },flatlist:{
    flex: 1,
  },titleContainer:{
    fontSize: 35,
    marginTop:30,
  }
})