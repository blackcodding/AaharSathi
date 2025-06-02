export interface IChipProps {
  chipName: string;
  selectedChip: string;
  actionType: 'add' | 'edit' | 'delete';
  onPress: (() => void) | undefined;
}

export interface IChipStyleProps {
  chipName: string;
  selectedChip: string;
  actionType: 'add' | 'edit' | 'delete';
}
