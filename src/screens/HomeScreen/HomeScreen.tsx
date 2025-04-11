import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {EXPIRING_SOON_SCREEN, MY_LIST_SCREEN} from '../../utils/screens';
import React, {useCallback, useState} from 'react';

import AlertCard from '../../components/Cards/AlertCard/AlertCard';
import BannerCard from '../../components/Cards/BannerCard/BannerCard';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {CrossIcon} from '../../assets/icons/CrossIcon';
import CustomBottomSheet from '../../components/CustomBottomSheet/CustomBottomSheet';
import {DeleteIcon} from '../../assets/icons/DeleteIcon';
import {ExpiringSoon} from '../../components/ExpiringSoon/ExpiringSoon';
import Header from '../../components/Header/Header';
import ItemDetailModel from '../../components/ItemDetailModel/ItemDetailModel';
import {Menu} from '../../components/Menu/Menu';
import {ScrollView} from 'react-native';
import {ToBuy} from '../../components/ToBuy/ToBuy';
import {UpcomingList} from '../../components/UpcomingList/UpcomingList';
import {View} from 'react-native';
import {generateStyles} from './HomeScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {useUpdate} from '../../hooks/useUpdate';

export const HomeScreen = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openToBuyBTS, setOpenToBuyBTS] = useState(false);
  const [openExpiringSoonBTS, setOpenExpiringSoonBTS] = useState(false);
  const [openAddItemBTS, setOpenAddItemBTS] = useState(false);
  const [openAddListItemBTS, setOpenAddListItemBTS] = useState(false);
  const [openThreeDotsBTS, setOpenThreeDotsBTS] = useState(false);

  const styles = generateStyles();
  const navigation = useNavigation() as any;
  const {isAppUpdateAvailable} = useUpdate();

  const userName = 'Supriya';

  const handleCloseMenuPress = () => {
    setOpenMenu(false);
  };

  const handleEditProfilePress = () => {
    //TODO: On Edit Profile Press Functionality
  };

  const onItemPress = () => {
    setOpenToBuyBTS(true);
  };

  const onAddItemPress = () => {
    setOpenAddItemBTS(true);
  };

  const onAddListItemPress = () => {
    setOpenAddListItemBTS(true);
  };

  const onOptionsPress = () => {
    setOpenThreeDotsBTS(true);
  };

  const onDetailsPress = () => {
    //TODO: On List Details Press Functionality
  };

  const onUpdatePress = () => {
    //TODO: On Update Press Functiona lity
  };

  const handleSeeAllExpiryCardPress = useCallback(() => {
    navigation.navigate(EXPIRING_SOON_SCREEN as never);
  }, []);

  const handleSeeAllUpcomingListPress = useCallback(() => {
    navigation.navigate(MY_LIST_SCREEN as never);
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
        showsVerticalScrollIndicator={false}>
        <Header />
        <ContainerHeading
          title={`Welcome ${userName}`}
          titleColor={DEFAULT_COLOR.BLACK}
          titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
          subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        />
        {isAppUpdateAvailable && <AlertCard onPress={onUpdatePress} />}
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
            onOptionsPress={onOptionsPress}
            onDetailsPress={onDetailsPress}
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
          heading={'Edit Item'}
          icon={<DeleteIcon />}
          onIconPress={() => {
            //TODO: On Icon Press Delete Functionality
          }}
          children={
            <ItemDetailModel
              actionType={'edit'}
              onQuantityPress={() => {}}
              onSavePress={() => {}}
              onCancelPress={() => {
                setOpenToBuyBTS(false);
              }}
            />
          }
          onClose={() => {
            setOpenToBuyBTS(false);
          }}
        />
      )}

      {openAddItemBTS && (
        <CustomBottomSheet
          heading={'Add Item'}
          icon={<CrossIcon />}
          onIconPress={() => {
            setOpenAddItemBTS(false);
          }}
          children={
            <ItemDetailModel
              actionType={'add'}
              onQuantityPress={() => {}}
              onSavePress={() => {}}
              onCancelPress={() => {
                setOpenAddItemBTS(false);
              }}
            />
          }
          onClose={() => {
            setOpenAddItemBTS(false);
          }}
        />
      )}

      {openExpiringSoonBTS && (
        <CustomBottomSheet
          heading={'Expiring in 3 days'}
          icon={<DeleteIcon />}
          children={<ItemDetailModel actionType={'delete'} />}
          onClose={() => {
            setOpenExpiringSoonBTS(false);
          }}
        />
      )}

      {openAddListItemBTS && (
        <CustomBottomSheet
          heading={'Add List Item'}
          icon={<CrossIcon />}
          onIconPress={() => {
            setOpenAddListItemBTS(false);
          }}
          children={
            <ItemDetailModel
              actionType={'add'}
              onQuantityPress={() => {}}
              onSavePress={() => {}}
              onCancelPress={() => {
                setOpenAddListItemBTS(false);
              }}
            />
          }
          onClose={() => {
            setOpenAddListItemBTS(false);
          }}
        />
      )}

      {openThreeDotsBTS && (
        <CustomBottomSheet
          heading={'Select Option'}
          icon={<CrossIcon />}
          onIconPress={() => {
            setOpenThreeDotsBTS(false);
          }}
          children={<></>}
          onClose={() => {
            setOpenThreeDotsBTS(false);
          }}
        />
      )}
    </View>
  );
};
