import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {EXPIRING_SOON_SCREEN, MY_LIST_SCREEN} from '../../utils/screens';
import React, {useCallback, useState} from 'react';
import {createToBuyItemUrl, deleteToBuyItemUrl} from '../../API/API';

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
import {getTokens} from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useUpdate} from '../../hooks/useUpdate';

export const HomeScreen = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openToBuyBTS, setOpenToBuyBTS] = useState(false);
  const [openExpiringSoonBTS, setOpenExpiringSoonBTS] = useState(false);
  const [openAddItemBTS, setOpenAddItemBTS] = useState(false);
  const [openAddListItemBTS, setOpenAddListItemBTS] = useState(false);
  const [openThreeDotsBTS, setOpenThreeDotsBTS] = useState(false);
  const [toBuyData, setToBuyData] = useState([]);
  const [expiringSoonData, setExpiringSoonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const styles = generateStyles();
  const navigation = useNavigation() as any;
  const {isAppUpdateAvailable} = useUpdate();
  const {userDetails, loading} = useSelector((state: any) => state.user);

  const {fullName} = userDetails || {};

  const handleCloseMenuPress = () => {
    setOpenMenu(false);
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
    //TODO: On Update Press Functionality
  };

  const handleSeeAllExpiryCardPress = useCallback(() => {
    navigation.navigate(EXPIRING_SOON_SCREEN as never);
  }, []);

  const handleSeeAllUpcomingListPress = useCallback(() => {
    navigation.navigate(MY_LIST_SCREEN as never);
  }, []);

  const handleOnItemAdd = async (item: any) => {
    try {
      setIsLoading(true);
      const tokens = await getTokens();
      if (!tokens?.accessToken) {
        throw new Error('User not authenticated');
      }

      const url = createToBuyItemUrl();

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens?.accessToken}`,
        },
        body: JSON.stringify({...item}),
      });

      const data = await response.json();

      if (response.ok) {
      } else {
        console.error('API Error:', data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error in adding item:', error);
    } finally {
      setIsLoading(false);
      setOpenAddItemBTS(false);
    }
  };

  const handleOnItemDelete = async (id: string) => {
    try {
      setIsLoading(true);
      const tokens = await getTokens();
      if (!tokens?.accessToken) {
        throw new Error('User not authenticated');
      }

      const url = deleteToBuyItemUrl(id);

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens?.accessToken}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
      } else {
        console.error('API Error:', data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error in adding item:', error);
    } finally {
      setIsLoading(false);
      setOpenExpiringSoonBTS(false);
      setOpenToBuyBTS(false);
    }
  };

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
          title={`Welcome ${fullName}`}
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

      {openMenu && <Menu onCloseMenuPress={handleCloseMenuPress} />}

      {openToBuyBTS && (
        <CustomBottomSheet
          snapPoints={['45%']}
          heading={'Edit Item'}
          icon={<DeleteIcon />}
          onIconPress={() => {
            handleOnItemDelete('');
          }}
          children={
            <ItemDetailModel
              actionType={'edit'}
              itemData={{}}
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
          snapPoints={['45%']}
          heading={'Add Item'}
          icon={<CrossIcon />}
          onIconPress={() => {
            setOpenAddItemBTS(false);
          }}
          children={
            <ItemDetailModel
              actionType={'add'}
              onSavePress={handleOnItemAdd}
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
          snapPoints={['45%']}
          heading={'Expiring in 3 days'}
          icon={<DeleteIcon strokeColor={DEFAULT_COLOR.RED_DARK} />}
          onIconPress={() => {
            handleOnItemDelete('');
          }}
          children={
            <ItemDetailModel
              actionType={'delete'}
              itemData={{}}
              onDeletePress={handleOnItemDelete}
            />
          }
          onClose={() => {
            setOpenExpiringSoonBTS(false);
          }}
        />
      )}

      {openAddListItemBTS && (
        <CustomBottomSheet
          snapPoints={['45%']}
          heading={'Add List Item'}
          icon={<CrossIcon />}
          onIconPress={() => {
            setOpenAddListItemBTS(false);
          }}
          children={
            <ItemDetailModel
              actionType={'add'}
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
          snapPoints={['45%']}
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
