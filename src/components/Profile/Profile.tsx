import {Image, TouchableOpacity, View} from 'react-native';

import {IProfileProps} from './Profile.types';
import React from 'react';
import {generateStyles} from './Profile.styles';

export const Profile = (props: IProfileProps) => {
  const {image, borderColor, showBorder, handleProfileClick} = props;
  const styles = generateStyles({borderColor, showBorder});
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleProfileClick}
      style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: image}} />
    </TouchableOpacity>
  );
};
