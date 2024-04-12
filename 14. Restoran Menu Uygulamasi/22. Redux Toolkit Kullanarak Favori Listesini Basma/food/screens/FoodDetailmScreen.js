import { StyleSheet, Text, View, Image, FlatList, ScrollView, Pressable } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { Entypo } from '@expo/vector-icons';
import { FavoritesContext } from '../store/favoritescontext';
import { useSelector ,useDispatch} from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
 

export default function FoodDetailmScreen({ route, navigation }) {

    var favoriteFoodIds = useSelector((state) => state.favorteFoods.ids);

    // const favoriteFoodContext = useContext(FavoritesContext);
    const { Foodid } = route.params;
    const selectFood = FOODS.find((food) => food.id === Foodid)

    const isFavorite = favoriteFoodIds.includes(Foodid);
    const dispatch = useDispatch();

    const presHandler = () => {

    }

    function changeFavorite() {
        if (isFavorite) {
            dispatch(removeFavorite({ id: Foodid }));
        } else {
            dispatch(addFavorite({ id: Foodid }));
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Pressable onPress={presHandler} style={({ pressed }) => (pressed ? styles.pressed : null)}>

                    <Entypo
                        name={isFavorite ? "star" : "star-outlined"}
                        size={24} color="white"
                        onPress={changeFavorite}
                    />

                </Pressable>
            },


        });
    },
        [navigation, selectFood.title, changeFavorite, isFavorite]);

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: selectFood.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectFood.title}</Text>
            <View style={styles.detailItemContainer}>
                <Text style={styles.detailItem}>{selectFood.complexity}</Text>
                <Text style={styles.detailItem}>{selectFood.affordability}</Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>İçindekiler</Text>
                </View>
                <FoodIngredients data={selectFood.ingredients} />

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    },
    listContainer: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        marginBottom: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        alignContent: 'center',
        textAlign: 'center',
    },
    subTitleContainer: {
        borderBottomWidth: 2,
        borderColor: 'orange',
        padding: 5,
        marginBottom: 10,
        marginVertical: 10,


    },
    subTitle: {
        color: 'orange',
        fontSize: 24,
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        marginTop: 5,

    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: 'red',
        textAlign: 'center',
        alignContent: 'center',

    },

    container: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
        alignContent: 'center',
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
