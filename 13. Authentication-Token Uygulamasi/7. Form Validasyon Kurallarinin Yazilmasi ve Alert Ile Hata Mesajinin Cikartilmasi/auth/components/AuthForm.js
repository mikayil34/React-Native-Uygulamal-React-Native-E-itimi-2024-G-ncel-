import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

export default function AuthForm({ isLogin, onsubmit }) {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('')
  const [enteredpasword, setEnteredPasword] = useState('')
  const [enteredConfirmpasword, setEnteredConfirmPasword] = useState('')
  function submitHandler() {
    onsubmit({
      email: enteredEmail,
      conformEmail: enteredConfirmEmail,
      pasword: enteredpasword,
      Confirmpasword: enteredConfirmpasword

    })
  }
  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPasword(enteredValue);
        break;
      case 'confirmemail':
        setEnteredConfirmEmail(enteredValue);
        break;
        break;
      case 'confirmpassword':
        setEnteredConfirmPasword(enteredValue);
        break;
      default:
        break;
    }
  }
  return (
    <View>
      <Input Label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, 'email')}
        value={enteredEmail}
      />
      {!isLogin && (
        <Input Label="Email Dorula"
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this, 'confirmemail')}
          value={enteredConfirmEmail}
        />

      )}
      <Input Label="Şifre"
        secure
        onUpdateValue={updateInput.bind(this, 'password')}
        value={enteredpasword}
      />
      {!isLogin && (
        <Input Label="şifreyi Dorula"
          secure
          onUpdateValue={updateInput.bind(this, 'confirmpassword')}
          value={enteredConfirmpasword}
        />

      )}
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>{isLogin ? "Giriş Yap" : "Kaydol"}</Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10,
  }
})