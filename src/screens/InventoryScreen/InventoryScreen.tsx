import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {ExpiringSoon} from '../../components/ExpiringSoon/ExpiringSoon';
import {IInventoryScreenProps} from './InventoryScreen.types';
import {Profile} from '../../components/Profile/Profile';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './InventoryScreen.styles';

const InventoryScreen = (props: IInventoryScreenProps) => {
  const {} = props;

  const allExpiringSoonData = [
    {
      id: '1',
      tagDetail: '30 Mar',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '2',
      tagDetail: '30 Apr',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '3',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '4',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '5',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '6',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '7',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '8',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '9',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '10',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '11',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
    {
      id: '12',
      tagDetail: '30 Jun',
      image:
        'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1721483701391',
      name: 'Apple',
      quantity: '100 gms',
    },
  ];

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileContainer}>
        <Profile
          image={
            'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'
          }
        />
      </View>
      <ContainerHeading
        title={'Inventory'}
        titleColor={DEFAULT_COLOR.BLACK}
        titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
      />
      <ExpiringSoon
        data={allExpiringSoonData}
        showHorizontal={false}
        noOfColumns={3}
      />
    </View>
  );
};

export default InventoryScreen;
