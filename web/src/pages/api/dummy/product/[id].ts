import { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '../../../../shared/domain';
import { products } from './index';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const product = products.find((p: Product) => p.id === req.query.id);

  if (product) {
    res.status(200).json(product);
  } else {
    res
      .status(404)
      .json({ message: `Product with ID ${req.query.id} not found.` });
  }
};
