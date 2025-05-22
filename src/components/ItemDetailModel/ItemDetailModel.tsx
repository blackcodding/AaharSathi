import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {categoriesData, getStepSize, unitOptions} from '../../Data/commonData';

import Chip from '../Chip/Chip';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {DefaultButton} from '../Buttons/DefaultButton/DefaultButton';
import DropDown from '../DropDown/DropDown';
import {IItemDetailModelProps} from './ItemDetailModel.types';
import InputBox from '../InputBox/InputBox';
import {MinusIcon} from '../../assets/icons/MinusIcon';
import {PlusIcon} from '../../assets/icons/PlusIcon';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './ItemDetailModel.styles';
import noop from 'lodash/noop';
import {toNumber} from 'lodash';
import {v4 as uuidv4} from 'uuid';

const ItemDetailModel = (props: IItemDetailModelProps) => {
  const {
    actionType,
    itemData,
    onSavePress = noop,
    onCancelPress = noop,
  } = props;

  const [name, setName] = useState(itemData?.name || '');
  const [quantity, setQuantity] = useState(itemData?.quantity || '');
  const [category, setCategory] = useState(itemData?.category || 'Grocery');
  const [unit, setUnit] = useState(itemData?.unit || 'gm');

  const styles = generateStyles({});

  useEffect(() => {
    setQuantity('');
  }, [unit]);

  const onQuantityPress = (action: 'plus' | 'minus') => {
    const step = getStepSize(unit);
    setQuantity((prev: string) => {
      const current = toNumber(prev);
      let newValue =
        action === 'plus' ? current + step : Math.max(0, current - step);
      if (unit === 'gm' || unit === 'ml' || unit === 'pc' || unit === 'pkt') {
        return Math.round(newValue).toString();
      }
      return newValue.toFixed(1).toString();
    });
  };

  const uniqueId = uuidv4();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{'Name'}</Text>
        <InputBox
          placeholder={'Enter Name'}
          inputBoxStyles={{
            flex: 0.7,
          }}
          value={name}
          setValue={setName}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{`Quantity`}</Text>
        <View style={styles.quantityContainer}>
          {actionType !== 'delete' && (
            <TouchableRipple
              borderless={true}
              onPress={() => {
                onQuantityPress('minus');
              }}
              style={styles.iconContainer}>
              <MinusIcon
                width={24}
                height={24}
                strokeColor={DEFAULT_COLOR.WHITE}
              />
            </TouchableRipple>
          )}
          <InputBox
            placeholder={'0'}
            keyboardType={'numeric'}
            value={quantity}
            setValue={setQuantity}
          />
          {actionType !== 'delete' && (
            <TouchableRipple
              borderless={true}
              onPress={() => {
                onQuantityPress('plus');
              }}
              style={styles.iconContainer}>
              <PlusIcon
                width={24}
                height={24}
                strokeColor={DEFAULT_COLOR.WHITE}
              />
            </TouchableRipple>
          )}
          <DropDown unit={unit} setUnit={setUnit} data={unitOptions} />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.textStyle}>{'Category'}</Text>
          <FlatList
            data={categoriesData}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <Chip
                  chipName={item.name}
                  selectedChip={category}
                  onPress={() => {
                    setCategory(item.name);
                  }}
                />
              );
            }}
            horizontal={true}
            contentContainerStyle={{
              marginTop: 4,
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {actionType !== 'delete' && (
        <View style={styles.buttonContainer}>
          <DefaultButton
            variant={'primary'}
            text={'Save'}
            extraStyles={{
              flex: 1,
              marginRight: 12,
            }}
            colors={{
              textColor: DEFAULT_COLOR.WHITE,
              borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
              backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
            }}
            onPress={() =>
              onSavePress({
                id: uniqueId,
                name,
                quantity,
                unit,
                category,
              })
            }
          />
          <DefaultButton
            variant={'primary'}
            text={'Cancel'}
            extraStyles={{
              flex: 1,
            }}
            onPress={onCancelPress}
          />
        </View>
      )}
    </View>
  );
};

export default ItemDetailModel;
