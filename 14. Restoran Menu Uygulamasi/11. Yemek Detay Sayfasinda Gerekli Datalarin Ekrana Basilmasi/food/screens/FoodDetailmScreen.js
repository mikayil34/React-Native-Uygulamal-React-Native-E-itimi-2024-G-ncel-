import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';

export default function FoodDetailmScreen({ route }) {

    const { Foodid } = route.params;
    const selectFood = FOODS.find((food) => food.id === Foodid)

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: selectFood.imageUrl }} style={styles.image} />
            <Text>{selectFood.title}</Text>
            <Text>{selectFood.complexity}</Text>

            <View>
                <Text style={styles.ingredientText}>İçindeki:</Text>
                <FoodIngredients data={selectFood.ingredients} />
              
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    listItem: {
        marginVertical: 10,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderColor: '#ccc',
    },
    listItemText: {
        fontSize: 16,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    ingredientText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});
