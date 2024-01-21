import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../Component/Information'

export default function CoursesInformation() {
    return (
        <ScrollView>
            <Information title="Angular eğtimi" imageSorge={require('../../assets/angular.jpg')} desc="Kapsamlı Angular eğtimi"></Information>
            <Information title="C Programa eğtimi" imageSorge={require('../../assets/c.png')} desc="Kapsamlı C Programa eğtimi"></Information>
            <Information title="Bootstrap eğtimi" imageSorge={require('../../assets/bootstrap5.png')} desc="Kapsamlı Bootstrap eğtimi"></Information>


        </ScrollView>
    )
}

const styles = StyleSheet.create({})