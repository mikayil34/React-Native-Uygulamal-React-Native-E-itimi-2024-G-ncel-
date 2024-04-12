import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCourses from './screens/AllCourses';
import ManageCourses from './screens/ManageCourses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentCourses from './screens/RecentCourses';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CoursOverWiev() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecentCourses" component={RecentCourses} />
      <Tab.Screen name="AllCourses" component={AllCourses} />
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
