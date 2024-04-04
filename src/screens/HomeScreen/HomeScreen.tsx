import {BackHandler, ScrollView} from 'react-native';
import React, {useEffect} from 'react';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {ExpiringSoon} from '../../components/ExpiringSoon/ExpiringSoon';
import {Profile} from '../../components/Profile/Profile';
import {ToBuy} from '../../components/ToBuy/ToBuy';
import {UpcomingList} from '../../components/UpcomingList/UpcomingList';
import {View} from 'react-native';
import {generateStyles} from './HomeScreen.styles';

export const HomeScreen = () => {
  useEffect(() => {
    const handleBackButton = () => true;
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  const styles = generateStyles();

  const handleProfileClick = () => {
    //TODO:
  };

  const onAddItemClick = () => {
    //TODO:
  };

  const handleSeeAllExpiryCardClick = () => {
    //TODO:
  };

  const handleSeeAllUpcomingListClick = () => {
    //TODO:
  };

  const toBuyData = [
    {
      id: '1',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '2',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '3',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '4',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '5',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
  ];

  //API Call -> expiringSoonData
  const expiringSoonData = [
    {
      id: '1',
      tagDetail: '30 Mar',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '2',
      tagDetail: '30 Apr',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '3',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
      name: 'Apple',
      quantity: '100 gms',
    },
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <Profile
        image={
          'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'
        }
        handleProfileClick={handleProfileClick}
      />
      <ContainerHeading
        title={'Welcome Supriya'}
        titleColor={DEFAULT_COLOR.RED_MEDIUM}
        titleSize={22}
        subtitle={'👋'}
        subTitleSize={20}
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
        <UpcomingList />
      </View>
    </ScrollView>
  );
};
