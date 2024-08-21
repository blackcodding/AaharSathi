import {TextInput, View} from 'react-native';

import {IInputBoxProps} from './InputBox.types';
import React from 'react';
import {generateStyles} from './InputBox.styles';

const InputBox = (props: IInputBoxProps) => {
  const {
    placeholder = 'Placeholder',
    multiline = false,
    autoFocus = false,
    keyboardType = 'default',
    editable = true,
    inputBoxStyles,
  } = props;

  const isError = false;

  const styles = generateStyles({isError, editable});

  return (
    <View style={[styles.inputContainer, inputBoxStyles]}>
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        editable={editable}
        style={styles.input}
      />
    </View>
  );
};

export default InputBox;
