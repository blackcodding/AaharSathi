import React from 'react'
import { Text, View } from 'react-native';
import { IContainerHeadingProps } from './containerHeading.types';
import { generateStyles } from './ContainerHeading.styles';

export const ContainerHeading = (props:IContainerHeadingProps) => {
    const {title, titleColor, titleSize, subtitle, subTitleSize} = props;
    const styles = generateStyles({titleColor, titleSize, subTitleSize});
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}   
        </View>
    );
};