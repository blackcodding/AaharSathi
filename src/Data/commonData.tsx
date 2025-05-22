export const chipData = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '2',
    name: 'Grocery',
  },
  {
    id: '3',
    name: 'Household',
  },
  {
    id: '4',
    name: 'Party',
  },
  {
    id: '5',
    name: 'Others',
  },
];

export const categoriesData = [
  {
    id: '1',
    name: 'Grocery',
  },
  {
    id: '2',
    name: 'Household',
  },
  {
    id: '3',
    name: 'Party',
  },
  {
    id: '4',
    name: 'Others',
  },
];

export const unitOptions = ['gm', 'kg', 'ml', 'ltr', 'pc', 'pkt'];

export const getStepSize = (unit: string) => {
  switch (unit) {
    case 'gm':
    case 'ml':
      return 50;
    case 'kg':
    case 'ltr':
      return 0.5;
    case 'pc':
    case 'pkt':
    default:
      return 1;
  }
};
