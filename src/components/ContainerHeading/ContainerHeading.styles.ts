import { StyleSheet } from "react-native"
import { DEFAULT_COLOR } from "../../Theme/Fonts";

export const generateStyles = (props: any)=> {
    const {titleColor, titleSize, subTitleSize} = props || {};
    return StyleSheet.create({
        titleContainer: {
            paddingVertical: 4,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        title: {
            fontFamily: 'Rubik-Bold',
            fontSize: titleSize || 16,
            color: titleColor || DEFAULT_COLOR.BLACK,
        },
        subtitle: {
            fontFamily: 'Rubik-Medium',
            fontSize: subTitleSize || 16,
            color: DEFAULT_COLOR.BLUE_MEDIUM,
        },
    });
};