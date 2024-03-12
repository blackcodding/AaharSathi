import React from 'react'
import { View } from 'react-native'
import { generateStyles } from './ExpiringSoon.styles';
import { IExpiringSoonProps } from './ExpiringSoon.types';
import { DefaultCard } from '../Cards/DefaultCard/DefaultCard';

export const ExpiringSoon = (props:IExpiringSoonProps) => {
    const {} = props;
    const styles = generateStyles();
    return (
        <View style={styles.mainContainer}>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
        </View>
    );
};