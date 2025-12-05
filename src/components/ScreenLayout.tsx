import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Header } from '@rneui/themed';

type Props = {
    title: string;
    children: React.ReactNode;
};

export const ScreenLayout: React.FC<Props> = ({ title, children }) => {
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: title, style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
                containerStyle={{ backgroundColor: '#3D6DCC' }}
            />
            {}
            <ScrollView contentContainerStyle={styles.content}>
                {children}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { padding: 16 },
});

export default ScreenLayout;
