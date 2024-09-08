import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import React, {useCallback, useState} from 'react';

import BannerCard from '../../components/BannerCard/BannerCard';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import CustomBottomSheet from '../../components/CustomBottomSheet/CustomBottomSheet';
import {DeleteIcon} from '../../assets/icons/DeleteIcon';
import {ExpiringSoon} from '../../components/ExpiringSoon/ExpiringSoon';
import Header from '../../components/Header/Header';
import InventoryScreen from '../ExpiringSoonScreen/ExpiringSoonScreen';
import ItemDetailModel from '../../components/ItemDetailModel/ItemDetailModel';
import {Menu} from '../../components/Menu/Menu';
import MyListScreen from '../MyListScreen/MyListScreen';
import {ScrollView} from 'react-native';
import {ToBuy} from '../../components/ToBuy/ToBuy';
import {UpcomingList} from '../../components/UpcomingList/UpcomingList';
import {View} from 'react-native';
import {generateStyles} from './HomeScreen.styles';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openToBuyBTS, setOpenToBuyBTS] = useState(false);
  const [openExpiringSoonBTS, setOpenExpiringSoonBTS] = useState(false);

  const styles = generateStyles();
  const navigation = useNavigation();

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
      tagDetail: '30 Mar',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: '',
    },
    {
      id: '2',
      tagDetail: '30 Apr',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Grocery',
    },
    {
      id: '3',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Household',
    },
    {
      id: '4',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Party',
    },
    {
      id: '5',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Travel',
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

  const expiringSoonData = [
    {
      id: '1',
      tagDetail: '30 Mar',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: '',
    },
    {
      id: '2',
      tagDetail: '30 Apr',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Grocery',
    },
    {
      id: '3',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Household',
    },
    {
      id: '4',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Party',
    },
    {
      id: '5',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
      category: 'Travel',
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
      category: '',
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
      category: 'Grocery',
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
      category: 'Household',
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
      category: 'Party',
    },
    {
      id: '5',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
      category: 'Travel',
    },
    {
      id: '6',
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
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <Header />
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
