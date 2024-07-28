import {IProfileProps} from './Profile.types';
import {Image} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './Profile.styles';

export const Profile = (props: IProfileProps) => {
  const {image, borderColor, showBorder, handleProfileClick} = props;
  const styles = generateStyles({borderColor, showBorder});
  return (
    <TouchableRipple
      borderless={true}
      onPress={handleProfileClick}
      style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: image}} />
    </TouchableRipple>
  );
};
