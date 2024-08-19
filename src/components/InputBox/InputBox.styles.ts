import {IInputBoxStyleProps} from './InputBox.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IInputBoxStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {},
    inputContainer: {},
    textInput: {},
  });
};
