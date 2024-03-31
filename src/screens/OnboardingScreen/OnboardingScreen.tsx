import {Image, Text, View} from 'react-native';

import {IOnboardingScreenProps} from './OnboardingScreen.types';
import React from 'react';
import {generateStyles} from './OnboardingScreen.styles';

export const OnboardingScreen = (props: IOnboardingScreenProps) => {
  const {imageUrl, text, subtext} = props;
  const styles = generateStyles();
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        {!!imageUrl && <Image style={styles.image} source={{uri: imageUrl}} />}
      </View>
      <View>
        <Text style={styles.text} numberOfLines={5}>
          {text}
        </Text>
        <Text style={styles.subtext} numberOfLines={5}>
          {subtext}
        </Text>
      </View>
    </View>
  );
};
