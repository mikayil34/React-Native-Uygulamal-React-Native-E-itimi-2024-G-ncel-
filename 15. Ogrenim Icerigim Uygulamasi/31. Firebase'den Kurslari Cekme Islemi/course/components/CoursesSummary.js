import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CoursesSummary({ periodName, Courses }) {

    const CoursesSum = Courses.reduce((sum, course) => {

        return sum + course.amount;
    }, 0);
    console.log(CoursesSum);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{periodName}</Text>
            <Text style={styles.cost}>{CoursesSum + ' TL'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 10,
        alignContent: 'center',
        

    },
    title: {
        color: 'white',
        fontSize: 12,


    }, cost: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }

})