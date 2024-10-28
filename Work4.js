// app/Work4.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Work4 = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Это работа 4. Нажмите на кнопку для перехода на следующий экран.</Text>
            <Button
                title="Перейти к экрану 4.1"
                onPress={() => navigation.navigate('Work4.1')} // Убедитесь, что имя совпадает
            />
        </View>
    );
};

export default Work4;
