// app/(tabs)/_layout.js
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="details" />
            <Tabs.Screen name="work1" />
            <Tabs.Screen name="work2" />
        </Tabs>
    );
}
