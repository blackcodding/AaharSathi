export interface IUpcomingListData {
  id: string;
  listName: string;
  totalQuantity: string;
  remainingQuantity: string;
  profileImage: string;
  date: string;
  amount: string;
}
export interface IUpcomingListProps {
  data: IUpcomingListData[];
}
