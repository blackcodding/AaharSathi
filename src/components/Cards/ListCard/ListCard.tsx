import {Image, Text, TouchableOpacity, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IListCardProps} from './ListCard.types';
import React from 'react';
import {Tag} from '../../Tags/Tag';
import {generateStyles} from './ListCard.styles';

export const ListCard = (props: IListCardProps) => {
  const {onOptionsClick, onDetailsClick, onAddItemClick} = props;
  const styles = generateStyles();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{'Birthday List'}</Text>
          <Tag
            text={'5 Items'}
            color={DEFAULT_COLOR.WHITE}
            backgroundColor={DEFAULT_COLOR.GREEN_MEDIUM}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onOptionsClick}
          style={styles.threeDotsContainer}>
          <View style={styles.bullet} />
          <View style={styles.bullet} />
          <View style={styles.bullet} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subheading}>{'3 Item remaining'}</Text>
      <View style={styles.iconContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848',
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onDetailsClick}
          style={styles.arrowContainer}>
          <Image
            style={styles.commonImage}
            source={{
              uri: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/next.png?updatedAt=1711578556017',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.dateContainer}>
          <View style={styles.calenderContainer}>
            <Image
              style={styles.commonImage}
              source={{
                uri: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/calendar.png?updatedAt=1711578507237',
              }}
            />
          </View>
          <Text style={styles.date}>{'1st April 2024'}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{'$: 500'}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onAddItemClick}
            style={styles.addItemContainer}>
            <Image
              style={styles.commonImage}
              source={{
                uri: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/plus.png?updatedAt=1711579118614',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
