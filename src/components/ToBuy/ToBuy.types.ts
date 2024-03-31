export interface IToBuyData {
  id: string;
  image: string;
  name: string;
  quantity: string;
}

export interface IToBuyProps {
  data: IToBuyData[];
  handleAddItemPress: () => void;
}
