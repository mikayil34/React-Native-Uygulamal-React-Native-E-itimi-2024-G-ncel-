import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function FoodIngredients({ data }) {
    return  data.map((item) => {
        return (
            <View style={styles.listItem} key={item}>
                <Text style={styles.listItemText}>{item}</Text>
            </View>
        )
    })
}

const styles = StyleSheet.create({
    listItem: {
        listItemText: {
            fontSize: 16,
        }, listItem: {
            marginVertical: 10,
            backgroundColor: '#f2f2f2',
            padding: 10,
            borderColor: '#ccc',
        },
    }
})