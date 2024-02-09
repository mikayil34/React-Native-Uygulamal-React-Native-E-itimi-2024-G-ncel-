import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

  const navigate = useNavigation()
  const handlerSignout = () => {
    auth.signOut().then(() => {
      navigate.navigate('Login');
    }).catch((error) => alert(error.message));;


  }
  return (
    <View style={styles.countainer}>
      <Text>email:{auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handlerSignout}> Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0782F9',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    width: '60%',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',

  },
  countainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})