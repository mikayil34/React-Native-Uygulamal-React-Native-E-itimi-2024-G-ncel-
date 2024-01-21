import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Information({ title, imageSorge, desc }) {
    return (
        <View>

            <Image style={styles.img} source={imageSorge}></Image>
           <View style={styles.titleDesc}>
           <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>

           </View>
           

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: "100%"
    }, titleDesc:{
        alignItems:"center",
        paddingVertical:20
    },
    title:{
       fontSize:30,
    },
    desc:{
        fontSize:20, 
    }
})