import * as fs from 'fs';
import { categories } from '../src/categories/categories.data';
import { Category } from '../src/shared/interfaces/categories.interfaces';
import {
  Product,
  StockState,
} from '../src/shared/interfaces/product.interface';
import * as faker from 'faker';
import * as path from 'path';

const file_begin = `
import { categories } from "src/categories/categories.data";
import { Product } from "src/shared/interfaces/product.interface";

export const products: Product[] = 
`;
const file_end = `

`;

const sample = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const images = fs
  .readdirSync(path.join('public', 'images', 'products'))
  .map((cat) => ({
    cat: cat,
    images: fs
      .readdirSync(path.join('public', 'images', 'products', cat))
      .map((im) => `http://localhost:3000/images/products/${cat}/${im}`),
  }));

const catImages: { [key: string]: { current: number; images: string[] } } = {};
images.forEach((catImage) => {
  catImages[catImage.cat] = { current: 0, images: catImage.images };
});

// return next image in folder
const productImage = (cat: Category) => {
  const catImage = catImages[cat.slug];
  const ret = catImage.images[catImage.current];
  catImage.current = (catImage.current + 1) % catImage.images.length;
  return ret;
};

const stockStateFactory: () => StockState = () => {
  const prob = {
    avail: 0.8,
    soon_avail: 0.15,
    unavail: 0.05,
  };
  const rand = Math.random();

  // available
  if (rand <= prob.avail) {
    return {
      state: 'available',
      deliveryIn: faker.random.number({ min: 2, max: 5 }),
      instockCount: faker.random.number({ min: 3, max: 100 }),
    };
  }

  // soon available
  else if (rand <= prob.avail + prob.soon_avail) {
    return {
      state: 'available-soon',
      deliveryIn: faker.random.number({ min: 7, max: 30 }),
    };
  }
  // unavailable
  else {
    return {
      state: 'unavailable',
    };
  }
};

const productFactory: (cat: Category) => Product = (cat: Category) => {
  const name = faker.commerce.productName();
  const shortDesc = faker.lorem.sentence();

  return {
    title: name,
    slug: faker.helpers.slugify(name),
    shortDesc,
    description: faker.lorem.paragraphs(4),
    category: cat,
    image: productImage(cat),
    price: faker.random.number({ min: 10, max: 600, precision: 10 }) + 9,
    similarProducts: [],
    stockState: stockStateFactory(),
    seo: {
      title: name + ' | Zahradnictví Březina',
      description: shortDesc,
    },
    properties: [
      {
        name: 'Nároky na světlo',
        ...sample([
          {
            value: 'Na slunci',
            ico: 'fa-sun',
          },
          {
            value: 'Světlé prostory',
            ico: 'fa-cloud-sun',
          },
          {
            value: 'Stín',
            ico: 'fa-cloud',
          },
        ]),
      },
      {
        name: 'Nároky na zalévání',
        ...sample([
          {
            value: 'Každý den',
            ico: 'fa-cloud-showers-heavy',
          },
          {
            value: '1–2x týdně',
            ico: 'fa-tint',
          },
          {
            value: '1x za dva týdny',
            ico: 'fa-cloud',
          },
          {
            value: '1x měsíčně',
            ico: 'fa-tint-slash',
          },
        ]),
      },
      {
        name: 'Teplota',
        ...sample([
          {
            value: '25°C+',
            ico: 'fa-thermometer-full',
          },
          {
            value: '20–25°C',
            ico: 'fa-thermometer-half',
          },
          {
            value: '10-20°C',
            ico: 'fa-thermometer-empty',
          },
        ]),
      },
      {
        name: 'Výška rostliny',
        ...sample([
          {
            value: '0–20cm',
            ico: 'fa-ruler-vertical',
          },
          {
            value: '20–50cm',
            ico: 'fa-ruler-vertical',
          },
          {
            value: '50–100cm',
            ico: 'fa-ruler-vertical',
          },
          {
            value: '100–200cm',
            ico: 'fa-ruler-vertical',
          },
        ]),
      },
      {
        name: 'Kvete',
        value: sample([
          'březen–říjen',
          'duben',
          'březen',
          'prosinec',
          'květen–září',
        ]),
      },
      {
        name: 'Barva květu',
        value: sample(['modrá', 'zelená', 'červená', 'žlutá', 'fialová']),
      },
    ],
  };
};

const generateSettings = [
  { cat: categories[2], count: 200 },
  { cat: categories[0], count: 50 },
  { cat: categories[1], count: 50 },
  { cat: categories[3], count: 50 },
  { cat: categories[4], count: 50 },
];

const generatedProducts: Product[] = [];

generateSettings.forEach((catCount) => {
  for (let i = 0; i < catCount.count; i++) {
    generatedProducts.push(productFactory(catCount.cat));
  }
});

let template = file_begin;
template += JSON.stringify(generatedProducts);
template += file_end;

fs.writeFileSync('./src/products/products.data.ts', template);
