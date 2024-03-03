import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';


const SignupScreen = () => {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext = useContext(AuthContext)

  async function singUpHandler({ email, pasword }) {
    setIsAuthanticating(true);
    try {
      const token = await createUser(email, pasword);
      authContext.authenticete(token);

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