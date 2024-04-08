import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function FoodItem({
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    ingredients }) {

const navigation = useNavigation()
    const FoodhandlePress = () => {
        navigation.navigate('FoodDetailmScreen', {
            Foodid:id,
        })
    }
    return (
        <View style={styles.foodItem}>
            <Pressable style={({pressed})=> (pressed ? styles.ButtonPressed:null) }
           onPress={FoodhandlePress} 
            >
                <View style={styles.innerView}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{complexity} </Text>
                    <Text style={styles.detailItem}>
                        {affordability}
                    </Text>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    foodItem: {
        margin: 15,
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3,
        shadowOpacity: 0.25,
        borderRadius: 10,

    },
    innerView: {},
    image: {
        width: '100%',
        height: 200, 
    },
    title: {

        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,

    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5, 

    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,

    },
    ButtonPressed:{
        opacity:0.5
    }

})