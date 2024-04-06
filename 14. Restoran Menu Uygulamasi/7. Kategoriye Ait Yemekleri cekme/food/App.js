import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import CustomHeader from './screens/CustomHeader';
 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
  name="Categories" 
  component={CategoriesScreen} 
  options={{ 
    headerTitle: props => <CustomHeader {...props} name="Categories" />, // Pass name prop to CustomHeader
    headerStyle: {
      backgroundColor: 'yellow',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
/>
        <Stack.Screen name="FoodOverview"
         component={FoodOverviewScreen} 
         options={{ 
          headerTitle: props => <CustomHeader {...props} name="Yemekler" />, // Pass name prop to CustomHeader
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
