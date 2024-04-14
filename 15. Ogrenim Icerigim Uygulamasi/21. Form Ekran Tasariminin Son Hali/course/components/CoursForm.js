import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function CoursForm({ }) {
    return (
        <View style={styles.CoursForm}>
            <Text style={styles.title}>Kurs Bilgilerim</Text>
            <View  style={styles.priceAndDate}>
                <Input label="Tutar" 
                textInputConfig={{
                    KeyboardEvent: "decimal-pad",
                    placeholder: "Tutar bilgisi giriniz",
                    onchangeText: () => { }

                }}
                stylesInput={ {flex:1} }
                     />
                <Input label="Tarih" textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onchangeText: () => { }

                }}
                stylesInput={ {flex:1} }
                />
            </View>

            <Input label="Başlık" textInputConfig={{
                placeholder: "Başlık bilgisi giriniz",
                multiline: true,
                
                onchangeText: () => { }

            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    CoursForm: {
marginTop: 40,


    },
    priceAndDate:{
        flexDirection: 'row',


    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
         justifyContent: 'center',
         color: 'blue',
         marginVertical: 20,

    }

})