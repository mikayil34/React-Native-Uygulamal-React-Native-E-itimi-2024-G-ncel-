import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

export default function AuthForm({isLogin }) {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredpasword, setEnteredPasword] = useState('')
  function updateInput(inputType,enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue); 
        break;
 
      case 'password':
        setEnteredPasword(enteredValue); 
        break;
    
      default:
        break;
    }
  }
  return (
    <View>
     <Input Label="Email" 
     keyboardType="email-address" 
     onUpdateValue={updateInput.bind(this,'email') }
     value={enteredEmail}
     />
      <Input Label="Şifre" 
    secure 
     onUpdateValue={updateInput.bind(this,'password') }
     value={enteredpasword}
     />
     <View style={styles.buttons}>
       <Button>{isLogin?"Giriş Yap":"Kaydol"}</Button>
     </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  buttons:{
    marginTop:10, 
  }
})