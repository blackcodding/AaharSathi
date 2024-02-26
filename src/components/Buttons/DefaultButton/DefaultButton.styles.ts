import { StyleSheet } from "react-native"
import { DEFAULT_FONT_SIZE } from "../../../Theme/Fonts"
import { IGenerateStyleProps } from "./DefaultButton.types";

export const generateStyles = (props : IGenerateStyleProps) => {
    const {colors, alignSelf} = props; 
    const { textColor, borderColor, backgroundColor} = colors || {};
    return StyleSheet.create({
        container: {
            alignSelf: alignSelf || 'center',
            borderWidth: 2,
            borderRadius: 50,
            borderColor: borderColor || '#150D13',
            backgroundColor: backgroundColor || '#FFFFFF',
            elevation: 3,
            shadowColor: '#150D13',
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        },
        text: {
            color: textColor || '#150D13',
            fontSize: DEFAULT_FONT_SIZE.BUTTON_SIZE,  
            fontWeight: '500',
            paddingHorizontal: 12,
            paddingVertical: 6,
        }
    })
}