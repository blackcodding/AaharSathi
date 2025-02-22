interface IColorsProps {
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export interface IDefaultButtonProps {
  variant?: 'primary' | 'secondary';
  text: string;
  extraStyles?: any;
  colors?: IColorsProps;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor?: string;
  onPress?: () => void;
}

export interface IGenerateStyleProps {
  variant?: 'primary' | 'secondary';
  colors?: IColorsProps;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
}
