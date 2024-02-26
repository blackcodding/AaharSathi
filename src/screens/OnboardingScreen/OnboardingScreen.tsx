import React from 'react'
import { Image, Text, View } from 'react-native'
import { generateStyles } from './OnboardingScreen.styles'
import { IOnboardingScreenProps } from './OnboardingScreen.types'

export const OnboardingScreen = (props: IOnboardingScreenProps) => {
  const {imageUrl, text = 'Screen 1'} = props;
  const styles = generateStyles();
  return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          {!!imageUrl &&
          <Image 
          style={styles.image}
          source={{uri: imageUrl}}/>}
        </View>
        <View>
          <Text style={styles.text} numberOfLines={5}>{text}</Text>
        </View>
      </View>
  )
}