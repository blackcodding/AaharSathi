export interface IMenuCardProps {
  image?: string;
  icon?: any;
  label?: string;
  name: string;
  shouldFlex?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  handleMenuCardPress?: () => void;
  onButtonPress?: () => void;
}

export interface IMenuCardStyleProps {
  shouldFlex?: boolean;
}
