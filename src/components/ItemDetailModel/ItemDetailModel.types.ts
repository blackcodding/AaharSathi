export interface IItemDetailModelProps {
  actionType: 'add' | 'edit' | 'delete';
  onQuantityPress?: (action: 'add' | 'delete') => void;
  onSavePress?: () => void;
  onCancelPress?: () => void;
}

export interface IItemDetailModelStyleProps {}
