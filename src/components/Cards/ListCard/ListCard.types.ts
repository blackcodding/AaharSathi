export interface IListCardProps {
  listName: string;
  totalQuantity: string;
  remainingQuantity: string;
  profileImage: string;
  date: string;
  amount: string;
  listStyles?: any;
  onOptionsClick: () => void;
  onDetailsClick: () => void;
  onAddItemClick: () => void;
}
