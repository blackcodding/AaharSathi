import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { generateStyles } from './OnboardingScreen.styles'
import { IOnboardingScreenProps } from './OnboardingScreen.types'
import { DefaultButton } from '../../components/Buttons/DefaultButton/DefaultButton'

export const OnboardingScreen = (props: IOnboardingScreenProps) => {
  const {skipText = 'Skip', imageUrl, text = 'Screen 1'} = props;
  const styles = generateStyles();
  return (
    // <SafeAreaView>
      <View style={styles.container}>
        <DefaultButton text={skipText} alignSelf={'flex-end'}/>
        <View style={styles.imageContainer}>
          {!!imageUrl &&
          <Image 
          style={styles.image}
          source={{uri: imageUrl}}/>}
        </View>
        <View>
          <Text style={styles.text} numberOfLines={5}>{text}</Text>
        </View>
        <View style={styles.bulletContainer}>
          <View style={styles.bullet}/>
          <View style={styles.bullet}/>
          <View style={styles.bullet}/>
        </View>
      </View>
    // </SafeAreaView>
  )
}