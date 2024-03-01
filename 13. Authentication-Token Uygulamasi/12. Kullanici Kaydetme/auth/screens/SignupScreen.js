import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'

async function singUpHandler({email,pasword}){
 // console.log(email,pasword);
 await createUser(email,pasword); 

}

const SignupScreen = () => {
 
  return (
    <View>
      <AuthContent onAuthenticate ={singUpHandler}/>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})