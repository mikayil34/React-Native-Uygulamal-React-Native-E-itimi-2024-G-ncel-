import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'

const PasswordScreen = () => {
  const [password, setPassword] = useState('')
  return (
    <View style={styles.main}>
      <Text>Şifrenizi Giriniz:</Text>
      <TextInput style={styles.input} 
      autoCapitalize={'none'}
      value={password}
      autoCorrect={false} onChangeText={(newValue)=>setPassword(newValue)} />
      {console.log(password)}
      {password.length<6 ?
      ( <Text>Şifre en az 6 karakter olmalı.</Text>):null
    }
    </View>
  )
}

export default PasswordScreen

const styles = StyleSheet.create({
main:{
  margin:10
},
input:{
  borderColor:'blue',
  borderWidth:1,
  padding:10 
}
})