import ChipContainer from '../../components/ChipContainer/ChipContainer';
import Header from '../../components/Header/Header';
import {IMyListScreenProps} from './MyListScreen.types';
import React from 'react';
import {ScrollView} from 'react-native';
import {generateStyles} from './MyListScreen.styles';

const MyListScreen = (props: IMyListScreenProps) => {
  const {} = props;

  const allUpcomingListData = [
    {
      id: '1',
      listName: 'Birthday List Empty',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '1 Apr 2024',
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
      date: '20 June 2024',
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
      date: '12 Jul 2024',
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
      date: '23 Apr 2024',
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
      date: '15 May 2024',
      amount: '$: 500',
      category: 'Party',
    },
    {
      id: '6',
      listName: 'Birthday List Party',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '9 Aug 2024',
      amount: '$: 500',
      category: 'Party',
    },
    {
      id: '7',
      listName: 'Birthday List Party',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '25 Sep 2024',
      amount: '$: 500',
      category: 'Party',
    },
    {
      id: '8',
      listName: 'Birthday List Travel',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '19 Oct 2024',
      amount: '$: 500',
      category: 'Travel',
    },
    {
      id: '9',
      listName: 'Birthday List Empty',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '3 Nov 2024',
      amount: '$: 500',
      category: 'Grocery',
    },
    {
      id: '10',
      listName: 'Birthday List Empty',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '5 Dec 2024',
      amount: '$: 500',
      category: 'Household',
    },
    {
      id: '11',
      listName: 'Birthday List Empty',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '14 Feb 2024',
      amount: '$: 500',
      category: '',
    },
    {
      id: '12',
      listName: 'Birthday List Empty',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '29 Dec 2024',
      amount: '$: 500',
      category: 'Grocery',
    },
  ];

  const styles = generateStyles({});

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <Header />
      <ChipContainer data={allUpcomingListData} />
    </ScrollView>
  );
};

export default MyListScreen;
