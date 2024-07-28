import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ContainerHeading} from '../ContainerHeading/ContainerHeading';
import {CreateListIcon} from '../../assets/icons/TabBarIcons/CreateListIcon';
import CreateListScreen from '../../screens/CreateListScreen/CreateListScreen';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {DashboardIcon} from '../../assets/icons/TabBarIcons/DashboardIcon';
import {ExpiringSoonIcon} from '../../assets/icons/TabBarIcons/ExpiringSoonIcon';
import ExpiringSoonScreen from '../../screens/ExpiringSoonScreen/ExpiringSoonScreen';
import {FeedBackIcon} from '../../assets/icons/TabBarIcons/FeedBackIcon';
import {HelpIcon} from '../../assets/icons/TabBarIcons/HelpIcon';
import {IMenuProps} from './Menu.types';
import {MenuCard} from '../Cards/MenuCard/MenuCard';
import {MyListIcon} from '../../assets/icons/TabBarIcons/MyListIcon';
import MyListScreen from '../../screens/MyListScreen/MyListScreen';
import {PencilIcon} from '../../assets/icons/PencilIcon';
import {Profile} from '../Profile/Profile';
import {RecipeIcon} from '../../assets/icons/TabBarIcons/Recipe';
import RecipeScreen from '../../screens/RecipeScreen/RecipeScreen';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './Menu.styles';
import {useNavigation} from '@react-navigation/native';

export const Menu = (props: IMenuProps) => {
  const {onCloseMenuPress, onEditProfilePress} = props;
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
            handleMenuCardClick={handleDashboardClick}
          />
          <MenuCard
            icon={<MyListIcon />}
            name={'My List'}
            handleMenuCardClick={onMyListClick}
          />
          <MenuCard
            icon={<CreateListIcon />}
            name={'Create List'}
            handleMenuCardClick={onCreateListClick}
          />
          <MenuCard
            icon={<ExpiringSoonIcon />}
            name={'Expiring Soon'}
            handleMenuCardClick={onExpiringSoonClick}
          />
          <MenuCard
            icon={<RecipeIcon />}
            name={'Recipe'}
            handleMenuCardClick={onRecipeClick}
          />
          <View style={styles.favoriteListContainer}>
            <ContainerHeading title={'Favorite List and Recipes'} />
          </View>
          <View style={styles.feedbackAndHelpContainer}>
            <MenuCard icon={<HelpIcon />} name={'Help'} shouldFlex={true} />
            <MenuCard
              icon={<FeedBackIcon strokeColor={DEFAULT_COLOR.GREEN_DARK} />}
              name={'Feedback'}
              shouldFlex={true}
            />
          </View>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
