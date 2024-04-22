import {Text, TouchableOpacity, View} from 'react-native';

import {ContainerHeading} from '../ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IMenuProps} from './Menu.types';
import {MenuCard} from '../Cards/MenuCard/MenuCard';
import {PencilIcon} from '../../assets/icons/PencilIcon';
import {Profile} from '../Profile/Profile';
import React from 'react';
import {generateStyles} from './Menu.styles';

export const Menu = (props: IMenuProps) => {
  const {onCloseMenuPress} = props;
  const styles = generateStyles();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onCloseMenuPress}
      style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={1} style={styles.menuContainer}>
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Profile
              image={
                'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'
              }
              showBorder={true}
            />
            <View style={styles.personalDetailsContainer}>
              <Text style={styles.name}>{'Supriya Barai'}</Text>
              <Text style={styles.phoneNumber}>{'0123456789'}</Text>
            </View>
          </View>
          <PencilIcon />
        </View>
        <View style={styles.Menu}>
          <ContainerHeading title={'Menu'} />
          <MenuCard name={'Dashboard'} />
          <MenuCard name={'My List'} />
          <MenuCard name={'Create List'} />
          <MenuCard name={'Inventory'} />
          <MenuCard name={'Recipe'} />
          <View style={styles.favoriteListContainer}>
            <ContainerHeading title={'Favorite List and Recipes'} />
          </View>
          <View style={styles.feedbackAndHelpContainer}>
            <MenuCard name={'Help'} shouldFlex={true} />
            <MenuCard name={'Feedback'} shouldFlex={true} />
          </View>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
