export interface IPopUpProps {
  title: string;
  text?: string;
  subtext?: string;
  enableRating?: boolean;
  onClosePress: () => void;
  onSubmitRating?: (id: number) => void;
}
