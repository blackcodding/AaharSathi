import {IInputBoxProps} from './InputBox.types';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {generateStyles} from './InputBox.styles';

const InputBox = (props: IInputBoxProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
};

export default InputBox;
