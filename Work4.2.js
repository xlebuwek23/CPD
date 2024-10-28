// app/Work4Screen2.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";

const Work4Screen2 = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Это экран 4.2 с другим контентом.</Text>
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default Work4Screen2;
