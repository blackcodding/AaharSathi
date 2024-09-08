import {FlatList, View} from 'react-native';

import Chip from '../Chip/Chip';
import {IChipContainerProps} from './ChipContainer.types';
import React from 'react';
import {generateStyles} from './ChipContainer.styles';

const ChipContainer = (props: IChipContainerProps) => {
  const {} = props;

  const data = [
    {
      id: '1',
      name: 'All',
    },
    {
      id: '2',
      name: 'Grocery',
    },
    {
      id: '3',
      name: 'Household',
    },
    {
      id: '4',
      name: 'Party',
    },
    {
      id: '5',
      name: 'Others',
    },
  ];

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Chip chipName={item.name} onPress={() => {}} />;
        }}
        horizontal={true}
      />
    </View>
  );
};

export default ChipContainer;
