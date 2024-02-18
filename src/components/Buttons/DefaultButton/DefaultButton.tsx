import React from 'react'
import { IDefaultButtonProps } from './DefaultButton.types'
import { generateStyles } from './DefaultButton.styles'
import { Text, View } from 'react-native';

export const DefaultButton = (props: IDefaultButtonProps) => {
    const {text = 'Default', colors, alignSelf} = props;
    const styles = generateStyles({colors, alignSelf});
    return (
        <View style={styles.container}>
            <Text style={styles.text} numberOfLines={1}>{text}</Text>
        </View>
    )
}