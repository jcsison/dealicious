import { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '../../../../shared/domain';
import { favorites } from './index';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (favorites.find((favorite: Product) => favorite.id === req.body.id)) {
    favorites.filter((favorite: Product) => favorite.id !== req.body.id);
    res
      .status(500)
      .json({ message: `Favorite with id ${req.body.id} has been deleted.` });
  } else {
    res.status(500).json({ message: 'Error finding favorite to delete.' });
  }
};
