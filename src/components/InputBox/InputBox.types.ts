import {KeyboardTypeOptions} from 'react-native';

export interface IInputBoxProps {
  placeholder?: string;
  multiline?: boolean;
  autoFocus?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  editable?: boolean;
  showSearchIcon?: boolean;
  showCrossIcon?: boolean;
  inputBoxStyles?: any;
}

export interface IInputBoxStyleProps {
  isError: boolean;
  editable: boolean;
  showSearchIcon: boolean;
}
