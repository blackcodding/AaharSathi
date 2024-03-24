import {Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IListCardProps} from './ListCard.types';
import React from 'react';
import {Tag} from '../../Tags/Tag';
import {generateStyles} from './ListCard.styles';

export const ListCard = (props: IListCardProps) => {
  const {} = props;
  const styles = generateStyles();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.upComingListNameContainer}>
          <Text style={styles.upComingListName}>{'Birthday List'}</Text>
          <Tag
            text={'5 Items'}
            color={DEFAULT_COLOR.WHITE}
            backgroundColor={DEFAULT_COLOR.GREEN_MEDIUM}
          />
        </View>
        <View style={styles.threeDotsContainer}>
          <View style={styles.bullet} />
          <View style={styles.bullet} />
          <View style={styles.bullet} />
        </View>
      </View>
    </View>
  );
};
