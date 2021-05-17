import { Favorite, Product, User } from '../../../shared/domain';

export const favorites: Favorite[] = [
  {
    id: '1',
    productId: '1',
    userId: '1'
  },
  {
    id: '2',
    productId: '2',
    userId: '1'
  },
  {
    id: '3',
    productId: '3',
    userId: '1'
  },
  {
    id: '4',
    productId: '4',
    userId: '1'
  },
  {
    id: '5',
    productId: '5',
    userId: '1'
  },
  {
    id: '6',
    productId: '1',
    userId: '2'
  }
];

const products: Product[] = [
  {
    id: '1',
    name: 'product1',
    description: 'product1 description',
    price: 12.05
  },
  {
    id: '2',
    name: 'product2',
    description: 'product2 description',
    price: 12.05
  },
  {
    id: '3',
    name: 'product3',
    description: 'product3 description',
    price: 12.05
  },
  {
    id: '4',
    name: 'product4',
    description: 'product4 description',
    price: 12.05
  },
  {
    id: '5',
    name: 'product5',
    description: 'product5 description',
    price: 12.05
  },
  {
    id: '6',
    name: 'product6',
    description: 'product6 description',
    price: 12.05
  },
  {
    id: '7',
    name: 'product7',
    description: 'product7 description',
    price: 12.05
  },
  {
    id: '8',
    name: 'product8',
    description: 'product8 description',
    price: 12.05
  },
  {
    id: '9',
    name: 'product9',
    description: 'product9 description',
    price: 12.05
  },
  {
    id: '10',
    name: 'product10',
    description: 'product10 description',
    price: 12.05
  }
];

const users: User[] = [
  {
    id: '1',
    first_name: 'Test',
    last_name: 'User',
    email: 'test@test.com',
    date_of_birth: new Date(1990, 1, 1)
  }
];

export default { favorites, products, users };
