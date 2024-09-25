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
    {
      id: '6',
      listName: 'Birthday List Party',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-02-03',
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
      date: '2024-03-01',
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
      date: '2024-03-02',
      amount: '$: 500',
      category: 'Travel',
    },
    {
      id: '9',
      listName: 'Birthday List Grocery',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-03-03',
      amount: '$: 500',
      category: 'Grocery',
    },
    {
      id: '10',
      listName: 'Birthday List Household',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-11-01',
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
      date: '2024-12-01',
      amount: '$: 500',
      category: '',
    },
    {
      id: '12',
      listName: 'Birthday List Grocery',
      totalQuantity: '5 Items',
      remainingQuantity: '3 Item remaining',
      profileImage:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
      date: '2024-12-02',
      amount: '$: 500',
      category: 'Grocery',
    },
  ];

  const allUpcomingListSortedData = allUpcomingListData.sort(
    (a: any, b: any) => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();
      return aDate - bDate;
    },
  );

  const styles = generateStyles({});

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <Header />
      <ChipContainer data={allUpcomingListSortedData} />
    </ScrollView>
  );
};

export default MyListScreen;
