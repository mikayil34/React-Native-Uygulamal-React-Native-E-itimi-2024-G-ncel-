import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({ children }) => {
    return (<Text style={styles.title}>{children}</Text>)
}

export default Title

const styles = StyleSheet.create({
    title: {
        borderWidth: 2,
        borderColor: 'red',
        textAlign: 'center',
        padding: 15,
        marginBottom: 20,
        borderRadius: 20,
        color: 'white',

    }
})