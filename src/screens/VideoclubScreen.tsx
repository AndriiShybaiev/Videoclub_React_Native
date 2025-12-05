import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

const VideoclubScreen: React.FC = () => {
    return (
        <ScreenLayout title="Videoclub">
            <Text style={styles.heading}>Videoclub</Text>
            <Text style={styles.paragraph}>Contenido de ejemplo</Text>
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    heading: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
    paragraph: { fontSize: 16 },
});

export default VideoclubScreen;
