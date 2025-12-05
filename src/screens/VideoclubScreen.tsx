import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { Text, Card } from '@rneui/themed';
import ScreenLayout from '../components/ScreenLayout';
import { MOVIES, Movie } from '../data/movies';

const VideoclubScreen: React.FC = () => {
    const renderMovieItem = ({ item }: { item: Movie }) => (
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
    );

    return (
        <ScreenLayout title="Videoclub" noPadding>
            <FlatList
                data={MOVIES}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
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
