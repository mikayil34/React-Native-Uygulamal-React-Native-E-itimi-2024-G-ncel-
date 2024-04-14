import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

export default function CoursForm({ }) {
    const [inputs, setInputs] = useState(
        {
            amount: '',
            date: '',
            description: ''
        }
    )
    function inputChange(inputIdentifier, enteredValue) {
       
        setInputs((prevInputs) => { 
            return {
                ...prevInputs,
                [inputIdentifier]: enteredValue
            }
        })
        console.log(inputs);


    }
    return (
        <View style={styles.CoursForm}>
            <Text style={styles.title}>Kurs Bilgilerim</Text>
            <View style={styles.priceAndDate}>
                <Input label="Tutar"
                    textInputConfig={{
                        KeyboardEvent: "decimal-pad",
                        placeholder: "Tutar bilgisi giriniz",
                        onChangeText:   inputChange.bind(this,'amount') ,
                        value: inputs.amount
                    }}
                    
                    stylesInput={{ flex: 1 }}
                    
                />
                <Input label="Tarih" textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText:   inputChange.bind(this,'date') ,
                        value: inputs.date

                }}
                    stylesInput={{ flex: 1 }}
                />
            </View>

            <Input label="Başlık" textInputConfig={{
                placeholder: "Başlık bilgisi giriniz",
                multiline: true,
                onChangeText:   inputChange.bind(this,'description') ,
                value: inputs.description

            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    CoursForm: {
        marginTop: 40,


    },
    priceAndDate: {
        flexDirection: 'row',


    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'blue',
        marginVertical: 20,

    }

})