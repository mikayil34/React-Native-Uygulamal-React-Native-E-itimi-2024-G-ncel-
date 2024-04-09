import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailmScreen from './screens/FoodDetailmScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { MaterialCommunityIcons,Entypo ,FontAwesome} from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  function DrawerNavegater() {
    return (
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: 'lightblue',
        },
      
      }}>
        <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
          headerTitle: 'Kategoriler',
          drawerIcon: ({focused, size, color}) => {
            return <FontAwesome  name="list" size={24} color="black" />
          }
        }} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen}  options={{
          headerTitle: 'Favoriler',
        drawerIcon: ({focused, size, color}) => {
          return <MaterialCommunityIcons name="star-half-full" size={24} color="black" />
        }
      
      }}
        />
      </Drawer.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <FavoritesContextProvider> 
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',

          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: 'lightblue',
          },
        }}>  
        <Stack.Screen name="Drawer" component={DrawerNavegater} options={
          {
            headerShown: false,
          }
        } />
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen name="FoodDetailmScreen" component={FoodDetailmScreen}
          options={{
            headerTitle: 'İçerik',
          }}
        />
      </Stack.Navigator>
      </FavoritesContextProvider>
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
