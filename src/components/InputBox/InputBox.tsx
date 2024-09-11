import {TextInput, View} from 'react-native';

import {IInputBoxProps} from './InputBox.types';
import React from 'react';
import {generateStyles} from './InputBox.styles';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {TouchableRipple} from 'react-native-paper';
import {CrossIcon} from '../../assets/icons/CrossIcon';
import {DEFAULT_COLOR} from '../../Theme/Theme';

const InputBox = (props: IInputBoxProps) => {
  const {
    placeholder = 'Placeholder',
    multiline = false,
    autoFocus = false,
    keyboardType = 'default',
    editable = true,
    showIcon = false,
    inputBoxStyles,
  } = props;

  const isError = false;

  const styles = generateStyles({isError, editable, showIcon});

  return (
    <View style={[styles.inputContainer, inputBoxStyles]}>
      {showIcon && (
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        editable={editable}
        style={styles.input}
      />
      {showIcon && (
        <TouchableRipple
          borderless={true}
          onPress={() => {}}
          style={styles.crossIcon}>
          <CrossIcon
            width={20}
            height={20}
            fillColor={'transparent'}
            strokeColor={DEFAULT_COLOR.GRAY_LIGHT}
          />
        </TouchableRipple>
      )}
    </View>
  );
};

export default InputBox;
