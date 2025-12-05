import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from '@rneui/themed';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../components/ScreenLayout';
import { RootStackParamList } from '../../App';

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;
type MovieDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MovieDetails'>;

const MovieDetailsScreen: React.FC = () => {
    const route = useRoute<MovieDetailsRouteProp>();
    const navigation = useNavigation<MovieDetailsNavigationProp>();
    const { movie } = route.params;

    return (
        <ScreenLayout title={movie.title} noPadding>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={{ uri: movie.poster }}
                    style={styles.poster}
                    resizeMode="contain"
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{movie.title}</Text>

                    <View style={styles.metaContainer}>
                        <Text style={styles.meta}>
                            <Text style={styles.label}>Año:</Text> {movie.year}
                        </Text>
                        <Text style={styles.meta}>
                            <Text style={styles.label}>Director:</Text> {movie.director}
                        </Text>
                        <Text style={styles.status}>
                            {movie.rented === "1" ? "🔴 Alquilada" : "🟢 Disponible"}
                        </Text>
                    </View>

                    <Text style={styles.synopsisLabel}>Sinopsis:</Text>
                    <Text style={styles.synopsis}>{movie.synopsis}</Text>

                    <Button
                        title="Volver al Videoclub"
                        onPress={() => navigation.goBack()}
                        buttonStyle={styles.button}
                        containerStyle={styles.buttonContainer}
                    />
                </View>
            </ScrollView>
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    poster: {
        width: '100%',
        height: 400,
        marginBottom: 16,
    },
    infoContainer: {
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    metaContainer: {
        marginBottom: 16,
    },
    meta: {
        fontSize: 16,
        marginBottom: 6,
    },
    label: {
        fontWeight: 'bold',
    },
    status: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 4,
    },
    synopsisLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    synopsis: {
        fontSize: 15,
        lineHeight: 22,
        color: '#333',
        textAlign: 'justify',
    },
    buttonContainer: {
        marginTop: 24,
        marginBottom: 16,
    },
    button: {
        paddingVertical: 12,
    },
});

export default MovieDetailsScreen;
