import {Image, View} from 'react-native';

import {IProfileProps} from './Profile.types';
import React from 'react';
import {generateStyles} from './Profile.styles';

export const Profile = (props: IProfileProps) => {
  const {image, borderColor, showBorder} = props;
  const styles = generateStyles({borderColor, showBorder});
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
};
