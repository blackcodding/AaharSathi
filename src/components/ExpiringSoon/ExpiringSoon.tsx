import {FlatList, View} from 'react-native';
import React, {useRef} from 'react';

import {DetailCard} from '../Cards/DetailCard/DetailCard';
import {IExpiringSoonProps} from './ExpiringSoon.types';
import {generateStyles} from './ExpiringSoon.styles';

const Data = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
  {
    id: '7',
  },
];

export const ExpiringSoon = (props: IExpiringSoonProps) => {
  const {} = props;
  const styles = generateStyles();
  const flatListRef = useRef();
  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={Data}
        renderItem={() => {
          return <DetailCard />;
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        bounces={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
