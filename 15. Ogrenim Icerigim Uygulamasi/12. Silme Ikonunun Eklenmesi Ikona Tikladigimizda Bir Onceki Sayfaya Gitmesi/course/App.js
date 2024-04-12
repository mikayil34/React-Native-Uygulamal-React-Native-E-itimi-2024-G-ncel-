import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
    <Tab.Navigator screenOptions={({navigation})=>(
      {
        headerStyle: {
          backgroundColor: 'pink',
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'pink'
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'darkblue',
        tabBarLabelStyle: {
          fontSize: 12
        },
        headerRight: () =>
        (
          <Pressable onPress={() => navigation.navigate('ManageCourses') }
          style={({ pressed }) => pressed && styles.iconPressed  }
          >
            <View style={styles.iconContainer}>
              <AntDesign name="plus" size={24} color="white" />
            </View>
          </Pressable>
        )


      })}>
      <Tab.Screen name="RecentCourses" component={RecentCourses}
        options={
          {
            title: 'Yakın Zamanda Kaydolunanlar',
            tabBarLabel: 'Yakın Zamanda',
            tabBarIcon: ({ color, size }) => (
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
            tabBarIcon: ({ color, size }) => (
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
  iconContainer: {
   marginHorizontal:8,
   marginVertical:2
  },iconPressed:{
    opacity:0.5
  }
});
