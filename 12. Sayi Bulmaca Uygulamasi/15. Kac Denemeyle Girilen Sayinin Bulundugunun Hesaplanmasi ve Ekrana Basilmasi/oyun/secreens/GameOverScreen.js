import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import CustomButton from '../components/CustomButton'

const GameOverScreen = ({ userNumber, roundsNumber }) => {
  console.log(roundsNumber);
  return (
    <View style={styles.container}>
      <Title>Oyun Tamamlandı!</Title>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require('../assets/success.jpg')} />
      </View>
      <Text style={styles.result}>
        <Text style={styles.counterNumber}>{roundsNumber.length}</Text> denemeyle
        <Text style={styles.counterNumber}> {userNumber}</Text> sayısını buldun
      </Text>
      <CustomButton>Yeni Oyuna Başla</CustomButton>
      <FlatList
        data={roundsNumber}
        keyExtractor={(blogPost) => blogPost}
        renderItem={({ item }) => {
          return (<Text   >{item}</Text>)
            ;
        }}
      />
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }, image: {
    height: '100%',
    width: '100%',
  }, imageView: {
    width: 350,
    height: 350,
    overflow: 'hidden',
    borderRadius: 175,
    borderWidth: 3,
    borderColor: 'red',
    margin: 30,


  }, result: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  }, counterNumber: {
    color: 'red'
  }

})