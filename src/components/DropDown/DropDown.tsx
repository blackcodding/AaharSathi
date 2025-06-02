import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ChevronIcon} from '../../assets/icons/ChevronIcon';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './DropDown.styles';

interface IDropDownProps {
  unit: string;
  setUnit: (unit: string) => void;
  data: any;
  itemData?: any;
  actionType: 'add' | 'edit' | 'delete';
}

export const DropDown = (props: IDropDownProps) => {
  const {unit, setUnit, data, actionType} = props;

  const [menuVisible, setMenuVisible] = useState(false);

  const styles = generateStyles({menuVisible, actionType});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{unit}</Text>
        <TouchableRipple
          borderless
          onPress={
            actionType !== 'delete'
              ? () => {
                  setMenuVisible(prev => !prev);
                }
              : undefined
          }
          style={styles.iconContainer}>
          <ChevronIcon
            strokeColor={DEFAULT_COLOR.GRAY_MEDIUM}
            fillColor={
              actionType === 'delete'
                ? DEFAULT_COLOR.GRAY_LIGHT
                : DEFAULT_COLOR.WHITE
            }
          />
        </TouchableRipple>
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {data.map((unit: string) => {
            return (
              <TouchableOpacity
                key={unit}
                activeOpacity={0.7}
                onPress={() => {
                  setUnit(unit);
                  setMenuVisible(prev => !prev);
                }}>
                <Text style={styles.menuText}>{unit}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default DropDown;
