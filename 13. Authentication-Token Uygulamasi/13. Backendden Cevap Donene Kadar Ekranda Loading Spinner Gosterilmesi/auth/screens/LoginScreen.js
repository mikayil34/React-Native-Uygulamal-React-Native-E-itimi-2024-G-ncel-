import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContent from '../components/AuthContent'

export default function LoginScreen( ) {
  function LoginUpHandler({email,pasword}){
 
     // createUser(email,pasword); 
   
   }
  return (
    <View>
      <AuthContent isLogin  onAuthenticate ={LoginUpHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({})