import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import CreateScreen from './screens/CreateScreen';
import { BlockProvider } from './context/BlogContext';

 

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <BlockProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle:'Blok Uygulaması'}}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </BlockProvider>
  );
}

const styles = StyleSheet.create( );
