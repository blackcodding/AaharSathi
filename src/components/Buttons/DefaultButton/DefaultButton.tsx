import React from 'react'
import { IDefaultButtonProps } from './DefaultButton.types'
import { generateStyles } from './DefaultButton.styles'
import { Text, TouchableOpacity } from 'react-native';

export const DefaultButton = (props: IDefaultButtonProps) => {
    const {text = 'Default', colors, alignSelf, onPress} = props;
    const styles = generateStyles({colors, alignSelf});
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
            <Text style={styles.text} numberOfLines={1}>{text}</Text>
        </TouchableOpacity>
    )
}