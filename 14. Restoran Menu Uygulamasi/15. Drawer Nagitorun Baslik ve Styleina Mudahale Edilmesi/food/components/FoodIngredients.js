import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function FoodIngredients({ data }) {
    return data.map((item) => {
        return (
            <View style={styles.listItem} key={item}>
                <Text style={styles.listItemText}>{item}</Text>
            </View>
        )
    })
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'orange',
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 10,
        paddingVertical: 4,
        textAlign: 'center', // Corrected property name
        alignItems: 'center', // Corrected property name
    },
    listItemText: {
        textAlign: 'center',
        alignItems: 'center',
    }
})
