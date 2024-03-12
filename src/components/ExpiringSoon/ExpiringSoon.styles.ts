import { StyleSheet } from "react-native"

export const generateStyles = () => {
    return StyleSheet.create( {
        mainContainer: {
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-start',  
            marginBottom: 16,    
        },
    });
};