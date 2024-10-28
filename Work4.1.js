// app/Work4Screen1.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Импортируем useNavigation

const Work4Screen1 = () => {
    const navigation = useNavigation(); // Получаем объект navigation через хук

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Это экран 4.1 с другим контентом.</Text>
            <Button title="Перейти к экрану 4.2" onPress={() => navigation.navigate('Work4.2')} />
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default Work4Screen1;
