import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';

import {CrossIcon} from '../../assets/icons/CrossIcon';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IInputBoxProps} from './InputBox.types';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './InputBox.styles';
import noop from 'lodash/noop';

const InputBox = (props: IInputBoxProps) => {
  const {
    placeholder = 'Placeholder',
    multiline = false,
    autoFocus = false,
    keyboardType = 'default',
    editable = true,
    showSearchIcon = false,
    showCrossIcon = false,
    inputBoxStyles,
    textInputStyles,
    placeholderTextColor,
    value = '',
    setValue = noop,
  } = props;

  const isError = false;

  const [shouldShowCrossIcon, setShouldShowCrossIcon] = useState(showCrossIcon);

  useEffect(() => {
    if (value === '') {
      setShouldShowCrossIcon(false);
    } else {
      setShouldShowCrossIcon(true);
    }
  }, [value]);

  const styles = generateStyles({
    isError,
    editable,
    showSearchIcon,
  });

  return (
    <View style={[styles.inputContainer, inputBoxStyles]}>
      {showSearchIcon && (
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        editable={editable}
        value={value}
        onChangeText={text => {
          setValue(text);
        }}
        style={[styles.input, textInputStyles]}
      />
      {showCrossIcon && shouldShowCrossIcon && (
        <TouchableRipple
          borderless={true}
          onPress={() => {
            setValue('');
          }}
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
