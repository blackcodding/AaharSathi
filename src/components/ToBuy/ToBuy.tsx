import React from 'react'
import { View } from 'react-native'
import { generateStyles } from './ToBuy.styles';
import { IToBuyProps } from './ToBuy.types';
import { DefaultCard } from '../Cards/DefaultCard/DefaultCard';

export const ToBuy = (props:IToBuyProps) => {
    const {} = props;
    const styles = generateStyles();
    return (
        <View style={styles.mainContainer}>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
            <DefaultCard/>
        </View>
    );
};