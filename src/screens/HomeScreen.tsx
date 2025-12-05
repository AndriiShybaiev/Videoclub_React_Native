import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../components/ScreenLayout';
import { RootStackParamList } from '../../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <ScreenLayout title="Inicio">
            <Text style={styles.heading}>Inicio</Text>
            <Text style={styles.paragraph}>Contenido de ejemplo</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Ir al Videoclub"
                    onPress={() => navigation.navigate('Videoclub')}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonWrapper}
                />
                <Button
                    title="Información del Autor"
                    onPress={() => navigation.navigate('Autor')}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonWrapper}
                />
            </View>
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    heading: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
    paragraph: { fontSize: 16, marginBottom: 24 },
    buttonContainer: { marginTop: 16 },
    buttonWrapper: { marginBottom: 12 },
    button: { paddingVertical: 12 },
});

export default HomeScreen;
