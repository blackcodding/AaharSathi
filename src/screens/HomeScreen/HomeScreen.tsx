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
import {CrossIcon} from '../../assets/icons/CrossIcon';

export const HomeScreen = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openToBuyBTS, setOpenToBuyBTS] = useState(false);
  const [openExpiringSoonBTS, setOpenExpiringSoonBTS] = useState(false);
  const [openAddItemBTS, setOpenAddItemBTS] = useState(false);
  const [openAddListItemBTS, setOpenAddListItemBTS] = useState(false);

  const styles = generateStyles();
  const navigation = useNavigation();

  const handleCloseMenuPress = () => {
    setOpenMenu(false);
  };

  const handleEditProfilePress = () => {};

  const onItemPress = () => {
    setOpenToBuyBTS(true);
  };

  const onAddItemPress = () => {
    setOpenAddItemBTS(true);
  };

  const onAddListItemPress = () => {
    setOpenAddListItemBTS(true);
  };

  const handleSeeAllExpiryCardPress = useCallback(() => {
    navigation.navigate(InventoryScreen as never);
  }, []);

  const handleSeeAllUpcomingListPress = useCallback(() => {
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
      listName: 'Birthday List Empty',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-01-01',
      amount: '$: 500',
      category: '',
    },
    {
      id: '2',
      listName: 'Birthday List Grocery',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-01-02',
      amount: '$: 500',
      category: 'Grocery',
    },
    {
      id: '3',
      listName: 'Birthday List Household',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-01-03',
      amount: '$: 500',
      category: 'Household',
    },
    {
      id: '4',
      listName: 'Birthday List Household',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-02-01',
      amount: '$: 500',
      category: 'Household',
    },
    {
      id: '5',
      listName: 'Birthday List Party',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-02-02',
      amount: '$: 500',
      category: 'Party',
    },
  ];

  return (
    <View>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
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
            handleItemPress={onItemPress}
            handleAddItemPress={onAddItemPress}
          />
        </View>
        <View>
          <ContainerHeading
            title={'Expiring Soon'}
            subtitle={'See All'}
            onPress={handleSeeAllExpiryCardPress}
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
            onPress={handleSeeAllUpcomingListPress}
          />
          <UpcomingList
            data={upcomingListData}
            onAddItemPress={onAddListItemPress}
          />
        </View>

        <BannerCard heading={'This is the heading of Banner Card'} />
      </ScrollView>
      {openMenu && (
        <Menu
          onCloseMenuPress={handleCloseMenuPress}
          onEditProfilePress={handleEditProfilePress}
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
      {openAddItemBTS && (
        <CustomBottomSheet
          snapPoints={['40%']}
          heading={'Add Item'}
          icon={<CrossIcon />}
          onIconPress={() => {
            setOpenAddItemBTS(false);
          }}
          children={<ItemDetailModel />}
          onClose={() => {
            setOpenAddItemBTS(false);
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
      {openAddListItemBTS && (
        <CustomBottomSheet
          snapPoints={['40%']}
          heading={'Add List Item'}
          icon={<CrossIcon />}
          onIconPress={() => {
            setOpenAddListItemBTS(false);
          }}
          children={<ItemDetailModel />}
          onClose={() => {
            setOpenAddListItemBTS(false);
          }}
        />
      )}
    </View>
  );
};
