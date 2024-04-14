import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import { Pressable } from 'react-native';
import { getFormatedDate } from '../helper/date';
import { EvilIcons } from '@expo/vector-icons';
export default function CoursForm({ cancelHandler, onSubmit, IsEdting, defaultvalue,deleteCourse }) {
    const [inputs, setInputs] = useState(
        {
            amount: {
                value: defaultvalue && defaultvalue.amount ? defaultvalue.amount.toString() : '',
                isValid: true
            },
            date: {
                value: defaultvalue && defaultvalue.date ? getFormatedDate(defaultvalue.date) : '',
                isValid: true
            },
            description: {
                value: defaultvalue && defaultvalue.description ? defaultvalue.description : '',
                isValid: true
            }
        }
    )
    function inputChange(inputIdentifier, enteredValue) {

        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [inputIdentifier]: {
                    value: enteredValue,
                    isValid: true
                }
            }
        })
    }

    function addorUpdateHandler() {
        const courseData = {
            description: inputs.description.value,
            amount: parseFloat(inputs.amount.value),
            date: new Date(inputs.date.value)
        }
        const amounIsvalid = courseData.amount > 0;
        const dateIsValid = courseData.date instanceof Date && !isNaN(courseData.date);
        const descriptionIsValid = courseData.description.trim().length > 0;
        if (!amounIsvalid || !dateIsValid || !descriptionIsValid) {
            setInputs((prevInputs) => {
                return {
                    amount: {
                        value: prevInputs.amount.value,
                        isValid: amounIsvalid
                    },
                    date: {
                        value: prevInputs.date.value,
                        isValid: dateIsValid
                    },
                    description: {
                        value: prevInputs.description.value,
                        isValid: descriptionIsValid
                    }
                }
            });
            return;

        }
        onSubmit(courseData);
    };

    return (
        <View style={styles.CoursForm}>
            <Text style={styles.title}>Kurs Bilgilerim</Text>
            <View style={styles.priceAndDate}>
                <Input label="Tutar"
                    textInputConfig={{
                        KeyboardEvent: "decimal-pad",
                        placeholder: "Tutar bilgisi giriniz",
                        onChangeText: inputChange.bind(this, 'amount'),
                        value: inputs.amount.value
                    }}
                    isValid={inputs.amount.isValid}
                    stylesInput={{ flex: 1 }}

                />

                <Input label="Tarih" textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputChange.bind(this, 'date'),
                    value: inputs.date.value

                }}
                    stylesInput={{ flex: 1 }}
                    isValid={inputs.date.isValid}
                />

            </View>

            <Input label="Başlık"
                textInputConfig={{
                    placeholder: "Başlık bilgisi giriniz",
                    multiline: true,
                    isValid: inputs.description.isValid,
                    onChangeText: inputChange.bind(this, 'description'),
                    value: inputs.description.value

                }}
                isValid={inputs.description.isValid}

            />
            <View style={styles.Invalid}>
                {
                    !inputs.amount.isValid && (<Text style={{ color: 'red' }}>Geçerli bir Tutar giriniz </Text>)
                }

                {
                    !inputs.date.isValid && (<Text style={{ color: 'red' }}>Geçerli bir Tarih giriniz </Text>)
                }
                {
                    !inputs.description.isValid && (<Text style={{ color: 'red' }}>Bir not giriniz </Text>)
                }
            </View>

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
            {IsEdting && <View style={styles.deleteContainer}>
                    <EvilIcons name="trash" size={36} color="black" onPress={deleteCourse} />
                </View>}
        </View>

    )
}

const styles = StyleSheet.create({
    CoursForm: {
        marginTop: 40,
        flex: 1,


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
    }, Invalid: {
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    }, deleteContainer: {
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: 'blue',
        paddingTop: 10,
        marginTop: 16,
    
      },

})