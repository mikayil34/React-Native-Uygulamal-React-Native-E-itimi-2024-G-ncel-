import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent({ isLogin }) {
    const navigation = useNavigation();
    const [credentialsInvalit, setCredentialsInvalit] = useState({
        email: false,
        pasword: false,
        confirmEmail: false,
        Confirmpasword: false
    })
    function submitHandler(credentails) {

        let { email, conformEmail, pasword, Confirmpasword } = credentails;

        email = email.trim();
        conformEmail = conformEmail.trim();
        pasword = pasword.trim();        
        Confirmpasword = Confirmpasword.trim();

        const emailIsValid = email.includes('@');
        const paswordIsValid = pasword.length > 6;
        const emailsAreEqul = email === conformEmail;
        const paswordsAreEqul = pasword === Confirmpasword;
        setCredentialsInvalit({
            email: !emailIsValid,
            pasword: !paswordIsValid,
            confirmEmail: !emailIsValid || !emailsAreEqul,
            Confirmpasword: !paswordIsValid || !paswordsAreEqul
        })
        if (!emailIsValid || !paswordIsValid || (!isLogin && (!emailsAreEqul || !paswordsAreEqul))) {
            Alert.alert('Hops!', 'Lütfen Girdiğiniz değerleri kontrol ediniz'); 
            return;
        }
     
        console.log(credentails);

    }
    function switchScreen() {
        if (isLogin) {
            navigation.navigate('Signup')
        } else {

            navigation.navigate('Login')
        }
    }
    return (
        <View style={styles.container}>
            <AuthForm credentialsInvalit={credentialsInvalit} isLogin={isLogin} onsubmit={submitHandler} />
            <View>
                <ButtonWhite onPress={switchScreen}>
                    {isLogin ? "Yeni Kullanıcı Oluştur" : "Giriş Yap"}
                </ButtonWhite>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blueviolet',
        marginTop: 50,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})