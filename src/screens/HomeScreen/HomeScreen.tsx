import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import React, {useCallback, useState} from 'react';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {ExpiringSoon} from '../../components/ExpiringSoon/ExpiringSoon';
import InventoryScreen from '../ExpiringSoonScreen/ExpiringSoonScreen';
import {Menu} from '../../components/Menu/Menu';
import MyListScreen from '../MyListScreen/MyListScreen';
import {PopUp} from '../../components/PopUp/PopUp';
import {Profile} from '../../components/Profile/Profile';
import {ScrollView} from 'react-native';
import {ToBuy} from '../../components/ToBuy/ToBuy';
import {UpcomingList} from '../../components/UpcomingList/UpcomingList';
import {View} from 'react-native';
import {generateStyles} from './HomeScreen.styles';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const styles = generateStyles();
  const navigation = useNavigation();

  const handleProfileClick = () => {
    setOpenMenu(true);
  };

  const handleCloseMenuClick = () => {
    setOpenMenu(false);
  };

  const onAddItemClick = () => {
    //TODO:
  };

  const handleSeeAllExpiryCardClick = useCallback(() => {
    navigation.navigate(InventoryScreen as never);
  }, []);

  const handleSeeAllUpcomingListClick = useCallback(() => {
    navigation.navigate(MyListScreen as never);
  }, []);

  const toBuyData = [
    {
      id: '1',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '2',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '3',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '4',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '5',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
  ];

  const expiringSoonData = [
    {
      id: '1',
      tagDetail: '30 Mar',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '2',
      tagDetail: '30 Apr',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '3',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '4',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '5',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '6',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
  ];

  const upcomingListData = [
    {
      id: '1',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
    },
    {
      id: '2',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
    },
    {
      id: '3',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
    },
    {
      id: '4',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
    },
  ];

  return (
    <View>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <Profile
            image={
              'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'
            }
            showBorder={true}
            handleProfileClick={handleProfileClick}
          />
        </View>
        <ContainerHeading
          title={'Welcome Supriya'}
          titleColor={DEFAULT_COLOR.BLACK}
          titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
          subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        />
        <View style={styles.Container}>
          <ContainerHeading title={'To Buy'} />
          <ToBuy data={toBuyData} handleAddItemPress={onAddItemClick} />
        </View>
        <View style={styles.Container}>
          <ContainerHeading
            title={'Expiring Soon'}
            subtitle={'See All'}
            onPress={handleSeeAllExpiryCardClick}
          />
          <ExpiringSoon data={expiringSoonData} />
        </View>
        <View style={styles.Container}>
          <ContainerHeading
            title={'Upcoming List'}
            subtitle={'See All'}
            onPress={handleSeeAllUpcomingListClick}
          />
          <UpcomingList data={upcomingListData} />
        </View>
      </ScrollView>
      {/* <PopUp onClosePress={() => {}} /> */}
      {!!openMenu && <Menu onCloseMenuPress={handleCloseMenuClick} />}
    </View>
  );
};
