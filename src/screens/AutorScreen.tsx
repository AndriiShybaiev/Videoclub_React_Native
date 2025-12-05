import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../components/ScreenLayout';
import { RootStackParamList } from '../../App';

type AutorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Autor'>;

const AutorScreen: React.FC = () => {
    const navigation = useNavigation<AutorScreenNavigationProp>();

    return (
        <ScreenLayout title="Autor">
            <Text style={styles.heading}>Autor</Text>
            <Text style={styles.paragraph}>Contenido de ejemplo</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Ver Portfolio"
                    onPress={() => navigation.navigate('Portfolio')}
                    buttonStyle={styles.button}
                />
            </View>
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    heading: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
    paragraph: { fontSize: 16, marginBottom: 24 },
    buttonContainer: { marginTop: 16 },
    button: { paddingVertical: 12 },
});

export default AutorScreen;
