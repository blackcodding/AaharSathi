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
            borderColor: borderColor || '#000000',
            backgroundColor: backgroundColor || 'transparent',
        },
        text: {
            color: textColor || '#000000',
            fontSize: DEFAULT_FONT_SIZE.BUTTON_SIZE,  
            fontWeight: '500',
            paddingHorizontal: 12,
            paddingVertical: 6,
        }
    })
}