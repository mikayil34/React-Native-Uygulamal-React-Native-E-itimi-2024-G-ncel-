import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCourses from './screens/AllCourses';
import ManageCourses from './screens/ManageCourses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentCourses from './screens/RecentCourses';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CoursOverWiev() {
  return (
    <Tab.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: 'pink',
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'pink'
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12},

      }

    }>
      <Tab.Screen name="RecentCourses" component={RecentCourses}
      options={
        {
          title: 'Yakın Zamanda Kaydolunanlar',
          tabBarLabel: 'Yakın Zamanda',
          tabBarIcon: ({ color,size }) => (
            <AntDesign name="hourglass" size={size} color={color} />
          )
        }
      
      }
      />
      <Tab.Screen name="AllCourses" component={AllCourses} 
      
      options={
        {
          title: 'Tüm Kurslar',
          tabBarLabel: 'Tüm Kurslar',
          tabBarIcon: ({ color,size }) => (
            <Entypo name="list" size={size} color={color} />
          )
        }
      
      }
      
      />
    </Tab.Navigator>
  )

}
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator  >
        <Stack.Screen
          name="CoursOverWiev"
          options={{
            headerShown: false
          }}
          component={CoursOverWiev}
        />
        <Stack.Screen name="ManageCourses" component={ManageCourses} />
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
