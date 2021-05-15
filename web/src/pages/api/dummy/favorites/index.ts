import { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '../../../../shared/domain';

export const favorites: Product[] = [
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
  }
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(favorites);
};
