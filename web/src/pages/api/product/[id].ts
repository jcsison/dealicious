import { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '../../../../shared/domain';
import { getDbItemById } from '../utils';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const product: Product = getDbItemById('products', req.query.id as string);

  if (product) {
    res.status(200).json(product);
  } else {
    res
      .status(404)
      .json({ message: `Product with ID ${req.query.id} not found.` });
  }
};
