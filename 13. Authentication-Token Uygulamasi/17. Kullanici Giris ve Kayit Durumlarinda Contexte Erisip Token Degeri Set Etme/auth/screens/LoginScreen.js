import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState ,useContext} from 'react'
import AuthContent from '../components/AuthContent'
import { LoginUser } from '../util/auth'
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';
 
export default function LoginScreen() {
  const [isAuthanticating, setIsAuthanticating] = useState(false);
  const authContext=useContext(AuthContext);
  async function LoginUpHandler({ email, pasword }) {
    setIsAuthanticating(true);
    try { 
      const token=  await LoginUser(email, pasword);
      console.log(token);

      authContext.authenticete(token);
    } catch (error) {
      Alert.alert('Giriş Yapılamadı!', 'Lütfen bilgilerinizi kontrol ediniz')
    }

    setIsAuthanticating(false);

  }
  if (isAuthanticating) {
    return <Loading message="Kullancı girişi yapılıyor" />
  }
  return (
    <View>
      <AuthContent isLogin onAuthenticate={LoginUpHandler} />
    </View>
  )
}

const styles = StyleSheet.create({})