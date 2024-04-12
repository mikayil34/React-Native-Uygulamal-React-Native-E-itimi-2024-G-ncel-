import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFormatedDate } from '../helper/date'

export default function CourseItem({ id, description, amount, date }) {
    return (
        <Pressable style={({ pressed }) => pressed && styles.pressed  } >
 <View style={styles.CoursContainer}>
            <View>
                <Text  style={styles.description}>{description}</Text>
                <Text>{getFormatedDate(date)}</Text>
            </View>
            <View style={styles.priceCOntainer}>
                <Text  style={styles.price}>{amount}</Text>
            </View>

        </View>
        </Pressable>
       
    )
}

const styles = StyleSheet.create({
    CoursContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:8,
        marginVertical:8,
        padding:12,
        backgroundColor:'pink',
        borderBottomWidth:1,
        borderBottomColor:'white',
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:4

    },priceCOntainer:{
        backgroundColor:'white',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        

    } ,
    description:{
        fontWeight:'bold',
        fontSize:16,
        color:'black',
       fontWeight:'bold',
       marginBottom:5,

    },
    price:{
        color:'blue',
       fontWeight:'bold',



    },
    pressed:{
       opacity:0.5
    }

})