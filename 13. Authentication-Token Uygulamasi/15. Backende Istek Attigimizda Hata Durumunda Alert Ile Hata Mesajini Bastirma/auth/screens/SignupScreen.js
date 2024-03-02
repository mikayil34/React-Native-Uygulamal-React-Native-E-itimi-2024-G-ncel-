import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading';


const SignupScreen = () => {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  async function singUpHandler({ email, pasword }) {
    setIsAuthanticating(true);
    try {
      await createUser(email, pasword);
    } catch (error) {
      Alert.alert('Kayıt olunamadı!', 'Lütfen bilgilerinizi kontrol ediniz')
    }

    setIsAuthanticating(false);

  }
  if (isAuthanticating) {
    return <Loading message="Kullancı Oluşturuluyor" />
  }
  return (
    <View>
      <AuthContent onAuthenticate={singUpHandler} />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})