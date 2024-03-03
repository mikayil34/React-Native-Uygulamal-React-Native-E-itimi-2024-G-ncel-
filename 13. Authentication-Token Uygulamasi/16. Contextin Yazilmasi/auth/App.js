import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider from './store/auth-context';

const Stack = createNativeStackNavigator();
function NormalStack() {
  return (<Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'blueviolet'
      },
      headerTintColor: 'white',
      contentStyle: {
        backgroundColor: 'white'
      }
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen}
      options={{ headerTitle: 'Kullancı Giriş' }}
    />
    <Stack.Screen name="Signup" component={SignupScreen}
      options={{ headerTitle: 'Kullancı Kayıt' }}
    />
  </Stack.Navigator>);

}
export default function App() {
  return ( 
    <AuthContextProvider>
      <NavigationContainer>
        <NormalStack />
      </NavigationContainer> 
      </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
