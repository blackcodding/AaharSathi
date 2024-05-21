export interface IListCardProps {
  listName: string;
  totalQuantity: string;
  remainingQuantity: string;
  profileImage: string;
  date: string;
  amount: string;
  onOptionsClick: () => void;
  onDetailsClick: () => void;
  onAddItemClick: () => void;
}
