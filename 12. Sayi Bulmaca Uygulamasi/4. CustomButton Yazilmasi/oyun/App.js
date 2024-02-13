import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameStartScreen from './secreens/GameStartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GameStartScreen />
    </View>

  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'blue',
    flex:1,
    
  },
});
