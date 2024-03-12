import { StyleSheet } from "react-native"
import { DEFAULT_COLOR } from "../../../Theme/Fonts";

export const generateStyles = () => {
    return StyleSheet.create({
        mainContainer: {
            width: 58,
            height: 58,
            backgroundColor: DEFAULT_COLOR.BLUE_LIGHT,
            borderWidth: 2,
            borderRadius: 12,
            borderColor: DEFAULT_COLOR.BLUE_DARK,
            marginTop: 8,
            marginRight: 8
        },
    });
};