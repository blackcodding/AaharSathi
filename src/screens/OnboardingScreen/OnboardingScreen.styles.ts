import { StyleSheet } from "react-native";
import { DEFAULT_FONT_SIZE } from "../../Theme/Fonts";
import { Dimensions } from "react-native";

const {width} = Dimensions.get("window")

export const generateStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            padding: 18,
        },
        itemContainer: {
            width: width - 18 * 2,
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 10,
        },
        imageContainer: {
            marginTop: 30,
        },
        image: {
            width: 300,
            height: 300,
            objectFit: 'contain' ,
        },
        text: {
            width: 320,
            fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
            fontWeight: '500',
            color: '#150D13',
            textAlign: 'center',
            marginTop: 20,
            paddingHorizontal: 8,
        },
        footer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 10,
        },
        bulletContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 30,
            marginHorizontal: 100,
            padding: 20,
        },
        bullet: {
            height: 12,
            width: 12,
            borderRadius: 50,
            borderWidth: 2,
            backgroundColor: '#FFFFFF',
        },
        activeBullet:{
            backgroundColor: '#150D13'
        },
        emptyView: {
            height: 38,
        } 
    });
};


