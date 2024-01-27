import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
 
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle:'Restaurent Uygulaması'}}>
        <Stack.Screen name='Search'  component={SearchScreen} />
        
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
