import { StockState } from '../interfaces/product.interface';

export const stockState = (value: StockState | undefined) => {
  switch (value?.state) {
    case 'available':
      return 'skladem';
    case 'available-soon':
      return 'brzy skladem';
    case 'unavailable':
      return 'nedostupné';
  }
};
