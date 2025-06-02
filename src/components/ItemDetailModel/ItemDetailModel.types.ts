export interface IItemDetailModelProps {
  actionType: 'add' | 'edit' | 'delete';
  itemData?: any;
  onSavePress?: (item: any) => void;
  onCancelPress?: () => void;
  onDeletePress?: (id: string) => void;
}

export interface IItemDetailModelStyleProps {}
