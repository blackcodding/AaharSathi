import React from 'react'
import { Image, View } from 'react-native';
import { generateStyles } from './Profile.styles';
import { IProfileProps } from './Profile.types';

export const Profile = (props: IProfileProps) => {
    const {image, borderColor, showBorder} = props;
    const styles = generateStyles({borderColor, showBorder});
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:image}}/>
        </View>
    );
};