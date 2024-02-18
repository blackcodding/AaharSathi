import { StyleSheet } from "react-native";
import { DEFAULT_FONT_SIZE } from "../../Theme/Fonts";

export const generateStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            padding: 18,
        },
        imageContainer: {
            alignSelf: 'center',
            marginTop: 40,
        },
        image: {
            width: 300,
            height: 300,
            objectFit: 'contain' ,  
        },
        text: {
            alignSelf: 'center',
            fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
            fontWeight: '500',
            color: '#000000',
            textAlign: 'center',
            marginTop: 20,
            paddingHorizontal: 8,
        },
        bulletContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
            marginHorizontal: 100,
            padding: 20,
            // backgroundColor: 'red',
        },
        bullet: {
            height: 12,
            width: 12,
            borderRadius: 50,
            borderWidth: 2,
            backgroundColor: '#FFFFFF',
        },
    });
};


