import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import { Pressable } from 'react-native';

export default function CoursForm({ cancelHandler, onSubmit, deleteCourse, IsEdting }) {
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
    }

    function addorUpdateHandler() {
       const courseData =  {
            description: inputs.description,
            amount: parseFloat(inputs.amount),
            date: new Date(inputs.date)
        }
         
        onSubmit(courseData);
    }
    return (
        <View style={styles.CoursForm}>
            <Text style={styles.title}>Kurs Bilgilerim</Text>
            <View style={styles.priceAndDate}>
                <Input label="Tutar"
                    textInputConfig={{
                        KeyboardEvent: "decimal-pad",
                        placeholder: "Tutar bilgisi giriniz",
                        onChangeText: inputChange.bind(this, 'amount'),
                        value: inputs.amount
                    }}

                    stylesInput={{ flex: 1 }}

                />
                <Input label="Tarih" textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputChange.bind(this, 'date'),
                    value: inputs.date

                }}
                    stylesInput={{ flex: 1 }}
                />
            </View>

            <Input label="Başlık" textInputConfig={{
                placeholder: "Başlık bilgisi giriniz",
                multiline: true,
                onChangeText: inputChange.bind(this, 'description'),
                value: inputs.description

            }} />

            <View style={styles.buttons}>

                <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={cancelHandler} >
                    <View style={styles.cancel}>
                        <Text style={styles.cancelText}>
                            iptal Et
                        </Text>
                    </View>
                </Pressable>
                <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={addorUpdateHandler} >
                    <View style={styles.addOrDelete}>
                        <Text style={styles.addOrDeleteText}>
                            {IsEdting ? 'Güncelle' : 'Ekle'}
                        </Text>
                    </View>
                </Pressable>

            </View>
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

    },
    pressed: {
        opacity: 0.5

    }, buttons: {
        flexDirection: 'row',
        justifyContent: 'center',

    }, cancel: {
        backgroundColor: 'red',
        minWidth: 120,
        marginRight: 10,
        padding: 10,
        alignContent: 'center',
    }, cancelText: {
        color: 'white',
        textAlign: 'center'
    }, addOrDelete: {
        backgroundColor: 'green',
        minWidth: 120,
        padding: 10,
        alignContent: 'center',
    }, addOrDeleteText: {
        color: 'white',
        textAlign: 'center'
    }

})