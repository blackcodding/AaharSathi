import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {Image, ScrollView} from 'react-native';
import React, {useCallback, useState} from 'react';

import BannerCard from '../../components/BannerCard/BannerCard';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import CustomBottomSheet from '../../components/CustomBottomSheet/CustomBottomSheet';
import {DeleteIcon} from '../../assets/icons/DeleteIcon';
import {ExpiringSoon} from '../../components/ExpiringSoon/ExpiringSoon';
import InputBox from '../../components/InputBox/InputBox';
import InventoryScreen from '../ExpiringSoonScreen/ExpiringSoonScreen';
import ItemDetailModel from '../../components/ItemDetailModel/ItemDetailModel';
import {Menu} from '../../components/Menu/Menu';
import MyListScreen from '../MyListScreen/MyListScreen';
import {Profile} from '../../components/Profile/Profile';
import {ToBuy} from '../../components/ToBuy/ToBuy';
import {UpcomingList} from '../../components/UpcomingList/UpcomingList';
import {View} from 'react-native';
import {commonStyles} from '../../components/commonStyles';
import {generateStyles} from './HomeScreen.styles';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openToBuyBTS, setOpenToBuyBTS] = useState(false);
  const [openExpiringSoonBTS, setOpenExpiringSoonBTS] = useState(false);

  const styles = generateStyles();
  const navigation = useNavigation();

  const handleProfileClick = () => {
    setOpenMenu(true);
  };

  const handleCloseMenuClick = () => {
    setOpenMenu(false);
  };

  const handleEditProfileClick = () => {};

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
          <Profile handleProfileClick={handleProfileClick} />
          <InputBox placeholder="Search" />
          <View style={commonStyles.gifContainer}>
            <Image
              source={
                true
                  ? require('../../assets/Gif/RingingBell.gif')
                  : require('../../assets/Images/Bell.png')
              }
              style={commonStyles.gif}
            />
          </View>
        </View>
        <ContainerHeading
          title={'Welcome Supriya'}
          titleColor={DEFAULT_COLOR.BLACK}
          titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
          subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        />
        <View>
          <ContainerHeading title={'To Buy'} />
          <ToBuy
            data={toBuyData}
            handleAddItemPress={onAddItemClick}
            setOpenToBuyBTS={setOpenToBuyBTS}
          />
        </View>
        <View>
          <ContainerHeading
            title={'Expiring Soon'}
            subtitle={'See All'}
            onPress={handleSeeAllExpiryCardClick}
          />
          <ExpiringSoon
            data={expiringSoonData}
            setOpenExpiringSoonBTS={setOpenExpiringSoonBTS}
          />
        </View>
        <View>
          <ContainerHeading
            title={'Upcoming List'}
            subtitle={'See All'}
            onPress={handleSeeAllUpcomingListClick}
          />
          <UpcomingList data={upcomingListData} />
        </View>

        <BannerCard heading={'This is the heading of Banner Card'} />
      </ScrollView>
      {openMenu && (
        <Menu
          onCloseMenuPress={handleCloseMenuClick}
          onEditProfilePress={handleEditProfileClick}
        />
      )}
      {openToBuyBTS && (
        <CustomBottomSheet
          snapPoints={['40%']}
          heading={'Edit Item'}
          icon={<DeleteIcon />}
          children={<ItemDetailModel />}
          onClose={() => {
            setOpenToBuyBTS(false);
          }}
        />
      )}
      {openExpiringSoonBTS && (
        <CustomBottomSheet
          snapPoints={['40%']}
          heading={'Expiring in 3 days'}
          icon={<DeleteIcon />}
          children={<ItemDetailModel />}
          onClose={() => {
            setOpenExpiringSoonBTS(false);
          }}
        />
      )}
    </View>
  );
};
