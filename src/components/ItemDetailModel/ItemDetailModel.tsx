import {Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IItemDetailModelProps} from './ItemDetailModel.types';
import InputBox from '../InputBox/InputBox';
import {MinusIcon} from '../../assets/icons/MinusIcon';
import {PlusIcon} from '../../assets/icons/PlusIcon';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './ItemDetailModel.styles';
import noop from 'lodash/noop';
import {DefaultButton} from '../Buttons/DefaultButton/DefaultButton';

const ItemDetailModel = (props: IItemDetailModelProps) => {
  const {
    actionType,
    onQuantityPress = noop,
    onSavePress = noop,
    onCancelPress = noop,
  } = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{'Name'}</Text>
        <InputBox
          placeholder={'Enter Name'}
          inputBoxStyles={{
            flex: 0.7,
          }}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{'Quantity'}</Text>
        <View style={styles.quantityContainer}>
          {actionType !== 'delete' && (
            <TouchableRipple
              borderless={true}
              onPress={() => {
                onQuantityPress('add');
              }}
              style={styles.iconContainer}>
              <MinusIcon
                width={24}
                height={24}
                strokeColor={DEFAULT_COLOR.WHITE}
              />
            </TouchableRipple>
          )}
          <InputBox placeholder={'0'} keyboardType={'numeric'} />
          {actionType !== 'delete' && (
            <TouchableRipple
              borderless={true}
              onPress={() => {
                onQuantityPress('delete');
              }}
              style={styles.iconContainer}>
              <PlusIcon
                width={24}
                height={24}
                strokeColor={DEFAULT_COLOR.WHITE}
              />
            </TouchableRipple>
          )}
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{'Category'}</Text>
        <InputBox
          placeholder={'Enter Category'}
          inputBoxStyles={{
            flex: 0.6,
          }}
        />
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
            onPress={onSavePress}
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
