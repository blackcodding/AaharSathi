import React from 'react'
import { View } from 'react-native';
import { generateStyles } from './DefaultCard.styles';

export const DefaultCard = () => {
    const styles = generateStyles();
    return (
        <View style={styles.mainContainer}></View>
    );
};