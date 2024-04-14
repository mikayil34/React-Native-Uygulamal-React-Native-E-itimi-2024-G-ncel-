import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, textInputConfig }) {
    const inputStiyle = [styles.input];
if (textInputConfig && textInputConfig.multiline) {
    inputStiyle.push(styles.multilineInput); 

}

    return (
        <View style={styles.InputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStiyle} {...textInputConfig} />
        </View>
    )
}

const styles = StyleSheet.create({
    InputContainer: {
        marginHorizontal: 10,
        marginVertical: 4,

    },
    label: {
        fontSize: 18,
        marginBottom: 4,
        color: 'blue',


    }, input: {
        fontSize: 18,
        padding: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 25,
    },multilineInput:{
        width: '100%',
        height: 100,
        textAlignVertical: 'top',
    }
})