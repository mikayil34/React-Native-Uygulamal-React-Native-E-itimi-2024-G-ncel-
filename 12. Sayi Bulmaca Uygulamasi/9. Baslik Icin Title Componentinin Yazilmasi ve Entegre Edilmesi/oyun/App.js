import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import GameStartScreen from './secreens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './secreens/GameScreen';


export default function App({ navigate }) {
  const [useNumber, setUseNumber] = useState(null);

  const sendedNumberHandler = (sendedNumber) => { 
    setUseNumber(sendedNumber);
  }
  let screen=<GameStartScreen onSendNumber={sendedNumberHandler} />
  if(useNumber){
    screen=<GameScreen></GameScreen>
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
