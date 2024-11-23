export interface IListCardProps {
  listName: string;
  totalQuantity: string;
  remainingQuantity: string;
  profileImage: string;
  icon?: any;
  date: string;
  amount: string;
  listStyles?: any;
  onOptionsPress: () => void;
  onDetailsPress: () => void;
  onAddItemPress: () => void;
}
