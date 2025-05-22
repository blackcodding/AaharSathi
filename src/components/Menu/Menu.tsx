import {
  CREATE_LIST_SCREEN,
  EXPIRING_SOON_SCREEN,
  HOME_SCREEN,
  MY_LIST_SCREEN,
  RECIPE_SCREEN,
  SIGN_IN_SCREEN,
} from '../../utils/screens';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getUserId, logoutUser} from '../../utils/storage';
import {useDispatch, useSelector} from 'react-redux';

import BackHeader from '../BackHeader/BackHeader';
import {CheckIcon} from '../../assets/icons/CheckIcon';
import {ContainerHeading} from '../ContainerHeading/ContainerHeading';
import {CreateListIcon} from '../../assets/icons/TabBarIcons/CreateListIcon';
import {DashboardIcon} from '../../assets/icons/TabBarIcons/DashboardIcon';
import {ExpiringSoonIcon} from '../../assets/icons/TabBarIcons/ExpiringSoonIcon';
import {FeedBackIcon} from '../../assets/icons/TabBarIcons/FeedBackIcon';
import {HelpIcon} from '../../assets/icons/TabBarIcons/HelpIcon';
import {IMenuProps} from './Menu.types';
import InputBox from '../InputBox/InputBox';
import {LogoutIcon} from '../../assets/icons/LogoutIcon';
import {MenuCard} from '../Cards/MenuCard/MenuCard';
import {MyListIcon} from '../../assets/icons/TabBarIcons/MyListIcon';
import {PencilIcon} from '../../assets/icons/PencilIcon';
import {PopUp} from '../PopUp/PopUp';
import {Profile} from '../Profile/Profile';
import {RecipeIcon} from '../../assets/icons/TabBarIcons/Recipe';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './Menu.styles';
import {updateUserDetailsUrl} from '../../API/API';
import {useNavigation} from '@react-navigation/native';
import {userSlice} from '../../slices/userSlice';

export const Menu = (props: IMenuProps) => {
  const {onCloseMenuPress} = props;

  const [editEnabled, setEditEnabled] = useState(false);

  const styles = generateStyles();
  const navigation = useNavigation() as any;
  const dispatch = useDispatch();
  const {userDetails} = useSelector((state: any) => state.user);
  const {fullName, email} = userDetails;

  const [name, setName] = useState(fullName || '');
  const [showPopup, setShowPopup] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const closeMenuOnDelay = useCallback(() => {
    setTimeout(() => {
      onCloseMenuPress();
    }, 100);
  }, []);

  const onEditProfilePress = useCallback(async () => {
    if (editEnabled) {
      try {
        dispatch(userSlice.actions.setLoading(true));
        const url = updateUserDetailsUrl();
        const userId = await getUserId();
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId, fullName: name}),
        });

        const data = await response.json();

        if (data.statusCode === 200) {
          dispatch(userSlice.actions.setUserDetails(data.data));
        } else {
          dispatch(userSlice.actions.setError('Something went wrong!'));
        }
      } catch (error) {
        dispatch(userSlice.actions.setError('User not found!'));
      } finally {
        dispatch(userSlice.actions.setLoading(false));
        setEditEnabled(false);
      }
    } else {
      setName('');
      setEditEnabled(true);
    }
  }, [editEnabled, name]);

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
    setShowPopup(true);
  };

  const onFeedbackPress = () => {
    setShowFeedback(true);
  };

  const onUpdatePress = () => {
    // TODO: Add navigation to update profile screen
  };

  const onLogoutPress = async () => {
    logoutUser();
    onCloseMenuPress();
    navigation.navigate(SIGN_IN_SCREEN as never);
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
              {editEnabled ? (
                <InputBox
                  inputBoxStyles={{
                    marginHorizontal: 0,
                    alignSelf: 'flex-start',
                  }}
                  textInputStyles={{
                    minWidth: '70%',
                    borderWidth: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    color: DEFAULT_COLOR.BLACK,
                    fontFamily: 'Roboto-Medium',
                    fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
                    backgroundColor: DEFAULT_COLOR.OFF_WHITE,
                  }}
                  placeholder={fullName}
                  placeholderTextColor={DEFAULT_COLOR.GRAY_DARK}
                  autoFocus
                  value={name}
                  setValue={setName}
                />
              ) : (
                <Text style={styles.name}>{fullName}</Text>
              )}
              <Text style={styles.phoneNumber}>{email}</Text>
            </View>
          </View>
          <TouchableRipple
            borderless={true}
            style={styles.iconStyles}
            onPress={onEditProfilePress}>
            {editEnabled ? <CheckIcon /> : <PencilIcon />}
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
              handleMenuCardPress={onHelpPress}
            />
            <MenuCard
              icon={<FeedBackIcon strokeColor={DEFAULT_COLOR.GREEN_DARK} />}
              name={'Feedback'}
              shouldFlex={true}
              handleMenuCardPress={onFeedbackPress}
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
        {showPopup && (
          <PopUp
            title={'Stuck Somewhere?'}
            text={`We're here for you, feel free to reach out at the email below`}
            subtext={'grocListicSupport@gmail.com'}
            onClosePress={() => {
              setShowPopup(false);
            }}
          />
        )}
        {showFeedback && (
          <PopUp
            title={'How was your experience?'}
            text={`We’d love to hear your feedback.`}
            subtext={'Tap the stars to rate and help us improve.'}
            enableRating
            onClosePress={() => {
              setShowFeedback(false);
            }}
            onSubmitRating={(selectedStarId: number) => {
              setShowFeedback(false);
            }}
          />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
