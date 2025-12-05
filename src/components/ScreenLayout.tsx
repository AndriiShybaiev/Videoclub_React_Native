import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '@rneui/themed';

type Props = {
    title: string;
    children: React.ReactNode;
    noPadding?: boolean;
};

export const ScreenLayout: React.FC<Props> = ({ title, children, noPadding = false }) => {
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: title, style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
                containerStyle={{ backgroundColor: '#3D6DCC' }}
            />
            <View style={[styles.content, noPadding && styles.noPadding]}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: {
        flex: 1,
        padding: 16,
    },
    noPadding: {
        padding: 0,
    },
});

export default ScreenLayout;
