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
}

export const DropDown = (props: IDropDownProps) => {
  const {unit, setUnit, data} = props;

  const [menuVisible, setMenuVisible] = useState(false);

  const styles = generateStyles({menuVisible});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{unit}</Text>
        <TouchableRipple
          borderless
          onPress={() => {
            setMenuVisible(prev => !prev);
          }}
          style={styles.iconContainer}>
          <ChevronIcon strokeColor={DEFAULT_COLOR.GRAY_MEDIUM} />
        </TouchableRipple>
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {data.map((unit: string) => {
            return (
              <TouchableOpacity
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
