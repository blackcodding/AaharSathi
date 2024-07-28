import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ContainerHeading} from '../ContainerHeading/ContainerHeading';
import CreateListScreen from '../../screens/CreateListScreen/CreateListScreen';
import ExpiringSoonScreen from '../../screens/ExpiringSoonScreen/ExpiringSoonScreen';
import {IMenuProps} from './Menu.types';
import {MenuCard} from '../Cards/MenuCard/MenuCard';
import MyListScreen from '../../screens/MyListScreen/MyListScreen';
import {PencilIcon} from '../../assets/icons/PencilIcon';
import {Profile} from '../Profile/Profile';
import RecipeScreen from '../../screens/RecipeScreen/RecipeScreen';
import {generateStyles} from './Menu.styles';
import {useNavigation} from '@react-navigation/native';

export const Menu = (props: IMenuProps) => {
  const {onCloseMenuPress} = props;
  const styles = generateStyles();
  const navigation = useNavigation();

  const closeMenuOnDelay = useCallback(() => {
    setTimeout(() => {
      onCloseMenuPress();
    }, 100);
  }, []);

  const handleDashboardClick = useCallback(() => {
    onCloseMenuPress();
  }, []);

  const onMyListClick = useCallback(() => {
    navigation.navigate(MyListScreen as never);
    closeMenuOnDelay();
  }, []);

  const onCreateListClick = useCallback(() => {
    navigation.navigate(CreateListScreen as never);
    closeMenuOnDelay();
  }, []);

  const onExpiringSoonClick = useCallback(() => {
    navigation.navigate(ExpiringSoonScreen as never);
    closeMenuOnDelay();
  }, []);

  const onRecipeClick = useCallback(() => {
    navigation.navigate(RecipeScreen as never);
    closeMenuOnDelay();
  }, []);

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
          <MenuCard
            name={'Dashboard'}
            handleMenuCardClick={handleDashboardClick}
          />
          <MenuCard name={'My List'} handleMenuCardClick={onMyListClick} />
          <MenuCard
            name={'Create List'}
            handleMenuCardClick={onCreateListClick}
          />
          <MenuCard
            name={'Expiring Soon'}
            handleMenuCardClick={onExpiringSoonClick}
          />
          <MenuCard name={'Recipe'} handleMenuCardClick={onRecipeClick} />
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
