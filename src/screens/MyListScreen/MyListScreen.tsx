import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {ScrollView, View} from 'react-native';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {IMyListScreenProps} from './MyListScreen.types';
import {Profile} from '../../components/Profile/Profile';
import React from 'react';
import {UpcomingList} from '../../components/UpcomingList/UpcomingList';
import {generateStyles} from './MyListScreen.styles';

const MyListScreen = (props: IMyListScreenProps) => {
  const {} = props;

  const allUpcomingListData = [
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
    {
      id: '5',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
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
    {
      id: '7',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
    },
    {
      id: '8',
      listName: 'Birthday List',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1st April 2024',
      amount: '$: 500',
    },
  ];

  const styles = generateStyles({});

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <ContainerHeading
        title={'My List'}
        titleColor={DEFAULT_COLOR.BLACK}
        titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
      />
      <UpcomingList
        data={allUpcomingListData}
        showVertical={true}
        listStyles={{
          width: '100%',
        }}
      />
    </ScrollView>
  );
};

export default MyListScreen;
