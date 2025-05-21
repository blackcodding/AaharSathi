import {IProfileProps} from './Profile.types';
import {Image} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {UserIcon} from '../../assets/icons/UserIcon';
import {generateStyles} from './Profile.styles';

export const Profile = (props: IProfileProps) => {
  const {
    image = '',
    icon = <UserIcon />,
    borderColor,
    showBorder = true,
    handleProfilePress,
  } = props;
  const styles = generateStyles({borderColor, showBorder});
  return (
    <TouchableRipple
      borderless={true}
      onPress={handleProfilePress}
      style={styles.imageContainer}>
      {image ? <Image style={styles.image} source={{uri: image}} /> : icon}
    </TouchableRipple>
  );
};
