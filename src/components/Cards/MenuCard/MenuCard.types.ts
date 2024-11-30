export interface IMenuCardProps {
  image?: string;
  icon?: any;
  name: string;
  shouldFlex?: boolean;
  handleMenuCardPress?: () => void;
  onButtonPress?: () => void;
}

export interface IMenuCardStyleProps {
  shouldFlex?: boolean;
}
