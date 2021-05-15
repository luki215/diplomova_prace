import { products } from 'src/products/products.data';
import { Homepage } from 'src/shared/interfaces/homepage.interface';

export const homepage: Homepage = {
  seo: {
    title: 'Domů | Zahradnictví Patrícia',
    description: '',
  },
  campaigns: [
    {
      title: 'Jarní speciál',
      products: products.slice(0, 4),
    },
    {
      title: 'Nejprodávanější',
      products: products.slice(4, 8),
    },
    {
      title: 'Výběr zahradníka',
      products: products.slice(8, 12),
    },
  ],
};
