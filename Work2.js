// app/Work2.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexDimensionsBasics = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.text}>Box 1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>Box 2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>Box 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        flex: 1,
        backgroundColor: 'powderblue',
        justifyContent: 'center', // Центрируем текст по вертикали
        alignItems: 'center', // Центрируем текст по горизонтали
    },
    box2: {
        flex: 2,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3: {
        flex: 3,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white', // Цвет текста
        fontSize: 24, // Размер текста
        fontWeight: 'bold', // Жирный текст
    },
});

export default FlexDimensionsBasics;
