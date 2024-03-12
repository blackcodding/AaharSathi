import React, { useEffect } from 'react';
import { View } from 'react-native';
import { BackHandler } from "react-native";
import { generateStyles } from './HomeScreen.styles';
import { Profile } from '../../components/Profile/Profile';
import { ContainerHeading } from '../../components/ContainerHeading/ContainerHeading';
import { DEFAULT_COLOR } from '../../Theme/Fonts';
import { ToBuy } from '../../components/ToBuy/ToBuy';
import { ExpiringSoon } from '../../components/ExpiringSoon/ExpiringSoon';
import { UpcomingList } from '../../components/UpcomingList/UpcomingList';

export const HomeScreen = () => {
  useEffect (()=> {
    const handleBackButton = () => true;
      BackHandler.addEventListener("hardwareBackPress", handleBackButton);
      return () => {
          BackHandler.removeEventListener(
              "hardwareBackPress",
              handleBackButton
          );
      };
  },[]);
  
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <Profile image={'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'}/>
      <ContainerHeading title={'Welcome Supriya'} titleColor={DEFAULT_COLOR.RED_MEDIUM} titleSize={20} subtitle={'👋'} subTitleSize={20}/>
      <View style={styles.Container}>
        <ContainerHeading title={'To Buy'}/> 
        <ToBuy/>
      </View>
      <View style={styles.Container}>
        <ContainerHeading title={'Expiring Soon'} subtitle={'See All'}/>
        <ExpiringSoon/>
      </View>
      <View style={styles.Container}>
        <ContainerHeading title={'Upcoming List'} subtitle={'See All'}/>
        <UpcomingList/>
      </View>
    </View>
  );
};