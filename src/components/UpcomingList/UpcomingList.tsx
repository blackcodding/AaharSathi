import {FlatList, View} from 'react-native';
import React, {useRef} from 'react';

import {IUpcomingListProps} from './UpcomingList.types';
import {ListCard} from '../Cards/ListCard/ListCard';
import {generateStyles} from './UpcomingList.styles';

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

export const UpcomingList = (props: IUpcomingListProps) => {
  const {} = props;
  const styles = generateStyles();
  const flatListRef = useRef();

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={Data}
        renderItem={() => {
          return <ListCard />;
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        bounces={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
