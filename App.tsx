import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';
import HomeScreen from './src/screens/HomeScreen';
import AutorScreen from './src/screens/AutorScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import VideoclubScreen from './src/screens/VideoclubScreen';

export type RootStackParamList = {
    Home: undefined;
    Autor: undefined;
    Portfolio: undefined;
    Videoclub: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Autor" component={AutorScreen} />
                    <Stack.Screen name="Portfolio" component={PortfolioScreen} />
                    <Stack.Screen name="Videoclub" component={VideoclubScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
