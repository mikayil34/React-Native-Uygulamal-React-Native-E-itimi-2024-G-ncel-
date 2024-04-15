import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function ErorrText({ errorMesaje }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hata!</Text>
      <Text style={styles.errorText}>{errorMesaje}</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'blue',
    marginVertical: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  }
});
