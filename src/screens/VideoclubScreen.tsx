
import React from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../components/ScreenLayout';
import { MOVIES, Movie } from '../data/movies';
import { RootStackParamList } from '../../App';

type VideoclubScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Videoclub'>;

const VideoclubScreen: React.FC = () => {
    const navigation = useNavigation<VideoclubScreenNavigationProp>();

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
