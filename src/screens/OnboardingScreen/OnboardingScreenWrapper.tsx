import React from 'react'
import { FlatList, View } from 'react-native'
import { OnboardingScreen } from './OnboardingScreen'
import { DefaultButton } from '../../components/Buttons/DefaultButton/DefaultButton'
import { generateStyles } from './OnboardingScreen.styles'

const Data = [{
    id: 1,
    imageUrl: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
    text: 'Effortlessly manage your groceries, expiry dates and stock with Aahar Sathi. Ensuring freshness and efficiency.'
}, {
    id: 2,
    imageUrl: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
    text: 'Effortlessly manage your groceries, expiry dates and stock with Aahar Sathi. Ensuring freshness and efficiency.'
}, {
    id: 3,
    imageUrl: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
    text: 'Effortlessly manage your groceries, expiry dates and stock with Aahar Sathi. Ensuring freshness and efficiency.'
}]

export const OnboardingScreenWrapper = () => {
    const styles = generateStyles();
    return (
        <View style={styles.container}>
            <DefaultButton text={'Skip'} alignSelf={'flex-end'}/>
            <FlatList 
            data={Data} 
            renderItem={({item}) => { 
                return <OnboardingScreen imageUrl={item?.imageUrl} text={item.text}/>
            }}
            horizontal={true}
            />
            <View style={styles.bulletContainer}>
                <View style={styles.bullet}/>
                <View style={styles.bullet}/>
                <View style={styles.bullet}/>
            </View>
        </View>
    )
}
