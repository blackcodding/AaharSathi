import {FlatList, View} from 'react-native';
import React, {useRef} from 'react';

import {IUpcomingListProps} from './UpcomingList.types';
import {ListCard} from '../Cards/ListCard/ListCard';
import {generateStyles} from './UpcomingList.styles';

export const UpcomingList = (props: IUpcomingListProps) => {
  const {data, showVertical = false, listStyles} = props;
  const styles = generateStyles();
  const flatListRef = useRef();

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({item}) => {
          return (
            <ListCard
              listName={item.listName}
              totalQuantity={item.totalQuantity}
              remainingQuantity={item.remainingQuantity}
              profileImage={item.profileImage}
              date={item.date}
              amount={item.amount}
              listStyles={listStyles}
              onOptionsClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              onDetailsClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              onAddItemClick={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={!showVertical}
        bounces={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
