import {FlatList, View} from 'react-native';

import Chip from '../Chip/Chip';
import {IChipContainerProps} from './ChipContainer.types';
import React, {useMemo, useState} from 'react';
import {generateStyles} from './ChipContainer.styles';
import {UpcomingList} from '../UpcomingList/UpcomingList';
import {ContainerHeading} from '../ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

const ChipContainer = (props: IChipContainerProps) => {
  const {data} = props;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const chipData = [
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

  const filteredData = useMemo(() => {
    if (selectedCategory === 'All') {
      return data;
    } else if (
      selectedCategory === 'Grocery' ||
      selectedCategory === 'Household' ||
      selectedCategory === 'Party'
    ) {
      return data.filter((item: any) => {
        return item?.category === selectedCategory;
      });
    } else {
      return data.filter((item: any) => {
        return (
          item?.category !== 'Grocery' &&
          item?.category !== 'Household' &&
          item?.category !== 'Party'
        );
      });
    }
  }, [data, selectedCategory]);

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={chipData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Chip
              chipName={item.name}
              selectedChip={selectedCategory}
              onPress={() => {
                setSelectedCategory(item.name);
              }}
            />
          );
        }}
        horizontal={true}
        contentContainerStyle={{
          marginTop: 4,
          marginBottom: 12,
        }}
      />
      <ContainerHeading
        title={`${selectedCategory} List`}
        titleColor={DEFAULT_COLOR.BLACK}
        titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM}
        subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
      />
      <UpcomingList
        data={filteredData}
        showVertical={true}
        listStyles={{
          width: '100%',
        }}
      />
    </View>
  );
};

export default ChipContainer;
