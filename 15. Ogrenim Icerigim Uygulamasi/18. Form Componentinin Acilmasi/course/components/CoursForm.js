import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function CoursForm({}) {
    return (
        <View style={styles.CoursForm}>

            <Input label="Tutar" textInputConfig={{
                KeyboardEvent: "decimal-pad",
                placeholder: "Tutar bilgisi giriniz",
                onchangeText: () => { }

            }} />
            <Input label="Tarih" textInputConfig={{
                placeholder: "YYYY-MM-DD",
                maxLength: 10,
                onchangeText: () => { }

            }} />
            <Input label="Başlık" textInputConfig={{
                placeholder: "Başlık bilgisi giriniz",
                multiline: true, 
                onchangeText: () => { }

            }} />
        </View>
    )
}

const styles = StyleSheet.create({
CoursForm:{
    marginHorizontal: 25,
    marginVertical: 25,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 25, 

}

})