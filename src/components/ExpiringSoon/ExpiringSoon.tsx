import {FlatList, View} from 'react-native';
import React, {useRef} from 'react';

import {DetailCard} from '../Cards/DetailCard/DetailCard';
import {IExpiringSoonProps} from './ExpiringSoon.types';
import {generateStyles} from './ExpiringSoon.styles';

export const ExpiringSoon = (props: IExpiringSoonProps) => {
  const {data} = props;
  const styles = generateStyles();
  const flatListRef = useRef();
  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({item}) => {
          return (
            <DetailCard
              tagDetail={item.tagDetail}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        bounces={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
