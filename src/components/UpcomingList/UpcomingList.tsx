import React from 'react'
import { View } from 'react-native'
import { generateStyles } from './UpcomingList.styles';
import { IUpcomingListProps } from './UpcomingList.types';
import { DefaultCard } from '../Cards/DefaultCard/DefaultCard';

export const UpcomingList = (props:IUpcomingListProps) => {
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