// app/Work4Navigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Work4 from './Work4';
import Work4Screen1 from './Work4.1';
import Work4Screen2 from './Work4.2';
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Work4Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Work4">
                <Stack.Screen name="Work4" component={Work4}/>
                <Stack.Screen name="Work4Screen1" component={Work4Screen1}/>
                <Stack.Screen name="Work4Screen2" component={Work4Screen2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Work4Navigator;
