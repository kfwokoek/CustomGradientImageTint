import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    return (
        <>
            <StatusBar style={{statusBar: 'dark'}}/>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
            </Stack>
        </>
    );
}
