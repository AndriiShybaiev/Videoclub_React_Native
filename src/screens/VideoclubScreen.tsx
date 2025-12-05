import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../components/ScreenLayout';
import { Movie } from '../data/movies';
import { RootStackParamList } from '../../App';

type VideoclubScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Videoclub'>;

const VideoclubScreen: React.FC = () => {
    const navigation = useNavigation<VideoclubScreenNavigationProp>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setMovies(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching movies:', err);
            setError('Error al cargar las películas. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const renderMovieItem = ({ item }: { item: Movie }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
            <Card containerStyle={styles.card}>
                <View style={styles.movieContainer}>
                    <Image
                        source={{ uri: item.poster }}
                        style={styles.poster}
                        resizeMode="cover"
                    />
                    <View style={styles.movieInfo}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.details}>
                            {item.year} - {item.director}
                        </Text>
                        <Text style={styles.rented}>
                            {item.rented === "1" ? "🔴 Alquilada" : "🟢 Disponible"}
                        </Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <ScreenLayout title="Videoclub">
                <View style={styles.centerContainer}>
                    <ActivityIndicator size="large" color="#3D6DCC" />
                    <Text style={styles.loadingText}>Cargando películas...</Text>
                </View>
            </ScreenLayout>
        );
    }

    if (error) {
        return (
            <ScreenLayout title="Videoclub">
                <View style={styles.centerContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            </ScreenLayout>
        );
    }

    return (
        <ScreenLayout title="Videoclub" noPadding>
            <FlatList
                data={movies}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    },
    errorText: {
        fontSize: 16,
        color: '#d32f2f',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    listContent: {
        padding: 16,
        paddingBottom: 16,
    },
    card: {
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 0,
        marginBottom: 12,
    },
    movieContainer: {
        flexDirection: 'row',
    },
    poster: {
        width: 80,
        height: 120,
        borderRadius: 4,
    },
    movieInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    details: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    rented: {
        fontSize: 12,
        fontWeight: '600',
    },
});

export default VideoclubScreen;
