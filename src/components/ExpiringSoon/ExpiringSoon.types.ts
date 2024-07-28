export interface IExpiringSoonData {
  id: string;
  tagDetail: string;
  image: string;
  name: string;
  quantity: string;
}
export interface IExpiringSoonProps {
  data: IExpiringSoonData[];
  showHorizontal?: boolean;
  noOfColumns?: number;
}
