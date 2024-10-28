// app/(tabs)/index.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const TabIndex = () => {
    const router = useRouter(); // Get the router to navigate

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page!</Text>
            <Button title="Work 1" onPress={() => router.push('Work1')} />
            <Button title="Work 2" onPress={() => router.push('/Work2')} />
            <Button title="Work 3" onPress={() => router.push('/Work3')} />
            <Button title="Work 4" onPress={() => router.push('/Work4')} />
            <Button title="Work 5" onPress={() => router.push('/Work5')} />
            <Button title="Work 6" onPress={() => router.push('/Work6')} />
            <Button title="Work 7" onPress={() => router.push('/Work7')} />
        </View>
    );
};

// Add some basic styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default TabIndex;
