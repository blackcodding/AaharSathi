import {
  CREATE_LIST_SCREEN,
  EXPIRING_SOON_SCREEN,
  HOME_SCREEN,
  MY_LIST_SCREEN,
  RECIPE_SCREEN,
  SIGN_IN_SCREEN,
} from '../../utils/screens';
import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getUserId, logoutUser} from '../../utils/storage';

import BackHeader from '../BackHeader/BackHeader';
import {ContainerHeading} from '../ContainerHeading/ContainerHeading';
import {CreateListIcon} from '../../assets/icons/TabBarIcons/CreateListIcon';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {DashboardIcon} from '../../assets/icons/TabBarIcons/DashboardIcon';
import {ExpiringSoonIcon} from '../../assets/icons/TabBarIcons/ExpiringSoonIcon';
import {FeedBackIcon} from '../../assets/icons/TabBarIcons/FeedBackIcon';
import {HelpIcon} from '../../assets/icons/TabBarIcons/HelpIcon';
import {IMenuProps} from './Menu.types';
import {LogoutIcon} from '../../assets/icons/LogoutIcon';
import {MenuCard} from '../Cards/MenuCard/MenuCard';
import {MyListIcon} from '../../assets/icons/TabBarIcons/MyListIcon';
import {PencilIcon} from '../../assets/icons/PencilIcon';
import {Profile} from '../Profile/Profile';
import {RecipeIcon} from '../../assets/icons/TabBarIcons/Recipe';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './Menu.styles';
import {signOutUserUrl} from '../../API/API';
import {useNavigation} from '@react-navigation/native';

export const Menu = (props: IMenuProps) => {
  const {onCloseMenuPress, onEditProfilePress} = props;
  const styles = generateStyles();
  const navigation = useNavigation() as any;

  const closeMenuOnDelay = useCallback(() => {
    setTimeout(() => {
      onCloseMenuPress();
    }, 100);
  }, []);

  const handleDashboardPress = useCallback(() => {
    navigation.navigate(HOME_SCREEN as never);
    onCloseMenuPress();
  }, []);

  const onMyListPress = useCallback(() => {
    navigation.navigate(MY_LIST_SCREEN as never);
    closeMenuOnDelay();
  }, []);

  const onCreateListPress = useCallback(() => {
    navigation.navigate(CREATE_LIST_SCREEN as never);
    closeMenuOnDelay();
  }, []);

  const onExpiringSoonPress = useCallback(() => {
    navigation.navigate(EXPIRING_SOON_SCREEN as never);
    closeMenuOnDelay();
  }, []);

  const onRecipePress = useCallback(() => {
    navigation.navigate(RECIPE_SCREEN as never);
    closeMenuOnDelay();
  }, []);

  const onHelpPress = () => {
    // TODO: Add navigation to help screen
  };

  const onFeedbackPress = () => {
    // TODO: Add navigation to feedback screen
  };

  const onUpdatePress = () => {
    // TODO: Add navigation to update profile screen
  };

  const onLogoutPress = async () => {
    try {
      const userId = getUserId();
      const url = signOutUserUrl();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
        }),
      });

      const data = await response.json();
      if (data.statusCode === 200) {
        logoutUser();
        navigation.navigate(SIGN_IN_SCREEN as never);
      } else {
        //TODO: Something went wrong popup
      }
    } catch (error) {
      console.log('Error --->', error);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onCloseMenuPress}
      style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={1} style={styles.menuContainer}>
        <BackHeader onIconPress={onCloseMenuPress} />
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Profile />
            <View style={styles.personalDetailsContainer}>
              <Text style={styles.name}>{'Supriya Barai'}</Text>
              <Text style={styles.phoneNumber}>{'0123456789'}</Text>
            </View>
          </View>
          <TouchableRipple
            borderless={true}
            style={styles.iconStyles}
            onPress={onEditProfilePress}>
            <PencilIcon />
          </TouchableRipple>
        </View>
        <View style={styles.Menu}>
          <ContainerHeading title={'Menu'} />
          <MenuCard
            icon={<DashboardIcon />}
            name={'Dashboard'}
            handleMenuCardPress={handleDashboardPress}
          />
          <MenuCard
            icon={<MyListIcon />}
            name={'My List'}
            handleMenuCardPress={onMyListPress}
          />
          <MenuCard
            icon={<CreateListIcon />}
            name={'Create List'}
            handleMenuCardPress={onCreateListPress}
          />
          <MenuCard
            icon={<ExpiringSoonIcon />}
            name={'Expiring Soon'}
            handleMenuCardPress={onExpiringSoonPress}
          />
          <MenuCard
            icon={<RecipeIcon />}
            name={'Recipe'}
            handleMenuCardPress={onRecipePress}
          />
          <View style={styles.menuHeader}>
            <ContainerHeading title={'Favorite List and Recipes'} />
          </View>
          <View style={styles.feedbackAndHelpContainer}>
            <MenuCard
              icon={<HelpIcon />}
              name={'Help'}
              shouldFlex={true}
              onButtonPress={onHelpPress}
            />
            <MenuCard
              icon={<FeedBackIcon strokeColor={DEFAULT_COLOR.GREEN_DARK} />}
              name={'Feedback'}
              shouldFlex={true}
              onButtonPress={onFeedbackPress}
            />
          </View>
          <View style={styles.menuHeader}>
            <ContainerHeading title={'Other'} />
          </View>
          <MenuCard
            label={'Version'}
            name={'V1.0.0'}
            showButton={true}
            buttonLabel={'Update'}
            onButtonPress={onUpdatePress}
          />
          <MenuCard
            icon={<LogoutIcon />}
            name={'Log Out'}
            nameColor={DEFAULT_COLOR.RED_DARK}
            handleMenuCardPress={onLogoutPress}
          />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
