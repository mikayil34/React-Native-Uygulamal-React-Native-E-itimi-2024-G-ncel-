import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ children,onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={({pressed})=>pressed ?[styles.pressed,styles.butoonInnerContainer]:styles.butoonInnerContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>

    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5
  }, buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  butoonInnerContainer: {
    paddingVertical: 8,

  },
  pressed:{
    opacity:0.5,
  }

})