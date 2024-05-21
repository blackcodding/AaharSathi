import {Dimensions, FlatList, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {HomeScreen} from '../HomeScreen/HomeScreen';
import {OnboardingScreen} from './OnboardingScreen';
import {generateStyles} from './OnboardingScreen.styles';
import {useNavigation} from '@react-navigation/native';

const {width: deviceWidth} = Dimensions.get('window');

const Data = [
  {
    id: '1',
    imageUrl:
      'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
    text: 'Effortless Management',
    subtext:
      'Effortlessly manage your groceries, expiry dates and stock with Aahar Sathi. Ensuring freshness and efficiency.',
  },
  {
    id: '2',
    imageUrl:
      'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
    text: 'Effortless Management',
    subtext:
      'Effortlessly manage your groceries, expiry dates and stock with Aahar Sathi. Ensuring freshness and efficiency.',
  },
  {
    id: '3',
    imageUrl:
      'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
    text: 'Effortless Management',
    subtext:
      'Effortlessly manage your groceries, expiry dates and stock with Aahar Sathi. Ensuring freshness and efficiency.',
  },
];

export const OnboardingScreenWrapper = () => {
  const styles = generateStyles();
  const flatListRef = useRef();
  const [index, setIndex] = useState(0);

  const navigation = useNavigation();

  const onScroll = useCallback(
    (Event: any) => {
      const newIndex = Event.nativeEvent.contentOffset.x / deviceWidth;
      const currentIndex = Math.round(newIndex);
      setIndex(currentIndex);
    },
    [index],
  );

  const onSkipPress = useCallback(() => {
    navigation.navigate(HomeScreen as never);
  }, []);

  const onGetStartedPress = useCallback(() => {
    navigation.navigate(HomeScreen as never);
  }, []);

  return (
    <View style={styles.container}>
      <DefaultButton
        text={'Skip'}
        alignSelf={'flex-end'}
        onPress={onSkipPress}
      />
      <FlatList
        ref={flatListRef}
        data={Data}
        renderItem={({item}) => {
          return (
            <OnboardingScreen
              imageUrl={item?.imageUrl}
              text={item.text}
              subtext={item.subtext}
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={onScroll}
      />
      <View style={styles.footer}>
        <View style={styles.bulletContainer}>
          <View
            style={[styles.bullet, index === 0 ? styles.activeBullet : null]}
          />
          <View
            style={[styles.bullet, index === 1 ? styles.activeBullet : null]}
          />
          <View
            style={[styles.bullet, index === 2 ? styles.activeBullet : null]}
          />
        </View>
        {index === 2 ? (
          <DefaultButton
            text={'Get Started'}
            // colors={{
            //   textColor: DEFAULT_COLOR.BLACK,
            //   borderColor: DEFAULT_COLOR.GREEN_DARK,
            //   backgroundColor: DEFAULT_COLOR.GREEN_MEDIUM,
            // }}
            alignSelf={'center'}
            onPress={onGetStartedPress}
          />
        ) : (
          <View style={styles.emptyView} />
        )}
      </View>
    </View>
  );
};
