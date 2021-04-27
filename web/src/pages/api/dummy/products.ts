import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../../shared/domain';

export default (req: NextApiRequest, res: NextApiResponse) => {
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

  res.status(200).json(products);
};
