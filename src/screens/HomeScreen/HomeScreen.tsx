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
  return (
    <ScrollView style={styles.mainContainer}>
      <Profile
        image={
          'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'
        }
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
        <ToBuy />
      </View>
      <View style={styles.Container}>
        <ContainerHeading title={'Expiring Soon'} subtitle={'See All'} />
        <ExpiringSoon />
      </View>
      <View style={styles.Container}>
        <ContainerHeading title={'Upcoming List'} subtitle={'See All'} />
        <UpcomingList />
      </View>
    </ScrollView>
  );
};
