import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen  from "./src/screens/CoursesScreen"
import CoursesInformation from './src/screens/CoursesInformation';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ana Sayfa'>
        <Stack.Screen name='Ana Sayfa'  component={HomeScreen} />
        <Stack.Screen name='Kurslarım'   component={CoursesScreen} />
        <Stack.Screen name='KursBilgilerim'   component={CoursesInformation} />
        <Stack.Screen name='SayacBilgisi'   component={CounterScreen} />
        <Stack.Screen name='Kutu'   component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  itemText: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  }, content: {
    marginVertical: 22,
  }
});
