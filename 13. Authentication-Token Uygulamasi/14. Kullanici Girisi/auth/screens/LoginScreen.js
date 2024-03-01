import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent'
import { LoginUser } from '../util/auth'
import Loading from '../components/Loading';
 
export default function LoginScreen( ) {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
 async function LoginUpHandler({email,pasword}){ 
  setIsAuthanticating(true); 
  await LoginUser(email,pasword); 
   setIsAuthanticating(false);

 }
 if(isAuthanticating){
return  <Loading message="Kullancı girişi yapılıyor"/> 
 }
  return (
    <View>
      <AuthContent isLogin  onAuthenticate ={LoginUpHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({})