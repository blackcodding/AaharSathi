import {Image, Text, View} from 'react-native';

import {CalenderIcon} from '../../../assets/icons/CalenderIcon';
import {ChevronIcon} from '../../../assets/icons/ChevronIcon';
import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IListCardProps} from './ListCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {Tag} from '../../Tags/Tag';
import {TouchableRipple} from 'react-native-paper';
import {UserIcon} from '../../../assets/icons/userIcon';
import {generateStyles} from './ListCard.styles';

export const ListCard = (props: IListCardProps) => {
  const {
    listName,
    totalQuantity,
    remainingQuantity,
    profileImage,
    icon = <UserIcon />,
    date,
    amount,
    listStyles,
    onOptionsPress,
    onDetailsPress,
    onAddItemPress,
  } = props;

  const formattedDate = (oldDate: string) => {
    const [year, month, date] = oldDate?.split('-');

    const monthMapper: any = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
    };

    return `${date} ${monthMapper[month]} ${year}`;
  };

  const styles = generateStyles();

  return (
    <View style={[styles.mainContainer, listStyles]}>
      <View style={styles.headerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{listName}</Text>
          <Tag
            text={totalQuantity}
            color={DEFAULT_COLOR.BLACK}
            backgroundColor={DEFAULT_COLOR.OFF_WHITE}
            borderColor={DEFAULT_COLOR.BLACK}
          />
        </View>
        <TouchableRipple
          borderless={true}
          onPress={onOptionsPress}
          style={styles.threeDotsContainer}>
          <>
            <View style={styles.bullet} />
            <View style={styles.bullet} />
            <View style={styles.bullet} />
          </>
        </TouchableRipple>
      </View>
      <Text style={styles.subheading}>{remainingQuantity}</Text>
      <View style={styles.iconContainer}>
        <View style={styles.imageContainer}>
          {!!profileImage ? (
            <Image
              style={styles.image}
              source={{
                uri: profileImage,
              }}
            />
          ) : (
            icon
          )}
        </View>
        <TouchableRipple
          borderless={true}
          onPress={onDetailsPress}
          style={styles.arrowContainer}>
          <ChevronIcon />
        </TouchableRipple>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.dateContainer}>
          <CalenderIcon width={20} height={16} />
          <Text style={styles.date}>{formattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
          <TouchableRipple
            borderless={true}
            onPress={onAddItemPress}
            style={styles.addItemContainer}>
            <PlusIcon
              width={16}
              height={16}
              strokeColor={DEFAULT_COLOR.GRAY_MEDIUM}
            />
          </TouchableRipple>
        </View>
      </View>
    </View>
  );
};
