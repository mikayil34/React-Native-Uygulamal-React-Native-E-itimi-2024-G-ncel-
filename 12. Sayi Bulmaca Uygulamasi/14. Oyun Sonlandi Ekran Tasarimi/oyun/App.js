import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import GameStartScreen from './secreens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './secreens/GameScreen';
import GameOverScreen from './secreens/GameOverScreen';
 

export default function App({ navigate }) {
  const [userNumber, setUseNumber] = useState(null);
const [gameIsOver, setGameIsOver] = useState(true);

  const sendedNumberHandler = (sendedNumber) => { 
    setUseNumber(sendedNumber);
    setGameIsOver(false);

  }
  let screen=<GameStartScreen onSendNumber={sendedNumberHandler} />
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} OnGameOver={()=>{
      setGameIsOver(true);
    }}></GameScreen>
  }  
  if(gameIsOver && userNumber){
    screen=<GameOverScreen /> 
  }
  return (
    <LinearGradient style={styles.container} colors={['rgba(0,0,0,0.8)', 'transparent']}>
      <ImageBackground style={styles.container} imageStyle={styles.image} source={require('./assets/back.jpg')}>
       {screen}
      </ImageBackground>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }, image: {

    opacity: 0.2,

  }
});
