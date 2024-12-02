interface IColorsProps {
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export interface IDefaultButtonProps {
  text: string;
  extraStyles?: any;
  colors?: IColorsProps;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  onPress?: () => void;
}

export interface IGenerateStyleProps {
  colors?: IColorsProps;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
}
