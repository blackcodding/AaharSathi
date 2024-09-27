import {Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IItemDetailModelProps} from './ItemDetailModel.types';
import InputBox from '../InputBox/InputBox';
import {MinusIcon} from '../../assets/icons/MinusIcon';
import {PlusIcon} from '../../assets/icons/PlusIcon';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './ItemDetailModel.styles';

const ItemDetailModel = (props: IItemDetailModelProps) => {
  const {} = props;

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
          <TouchableRipple borderless={true} style={styles.iconContainer}>
            <MinusIcon
              width={24}
              height={24}
              strokeColor={DEFAULT_COLOR.WHITE}
            />
          </TouchableRipple>
          <InputBox placeholder={'0'} keyboardType={'numeric'} />
          <TouchableRipple borderless={true} style={styles.iconContainer}>
            <PlusIcon
              width={24}
              height={24}
              strokeColor={DEFAULT_COLOR.WHITE}
            />
          </TouchableRipple>
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
    </View>
  );
};

export default ItemDetailModel;
