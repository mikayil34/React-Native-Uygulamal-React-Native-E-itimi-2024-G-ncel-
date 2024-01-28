import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" size={30} color="black" style={styles.iconStyle} />
            <TextInput placeholder='Ara' style={styles.inputStyle}  autoCorrect={false} autoCapitalize="none"/>

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 20
    }, iconStyle: {
        marginHorizontal: 15,

    }, inputStyle: {
        flex: 1,
        fontSize: 18,

    }

})