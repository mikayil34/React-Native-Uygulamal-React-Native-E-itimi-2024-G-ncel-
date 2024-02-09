import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const LonginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.countainer} behavior='padding'>
      <View style={styles.inputContainer}> 
        <TextInput style={styles.input}  placeholder='Email' />
        <TextInput  style={styles.input} placeholder='Şifre' /> 

      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.outlineButton]}>
          <Text style={styles.outlineButtonText}> Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LonginScreen

const styles = StyleSheet.create({
  countainer:{
    
  },
  inputContainer:{

  },input:{

  },
  buttonContainer:{

  },
  button:{

  },buttonText:{

  },outlineButton:{

  },
  outlineButtonText:{
    
  }


})