import { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '../../../../shared/domain';
import { favorites } from './index';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const newFavorite: Product = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image_url: req.body.image_url ?? ''
  };

  if (favorites.find((favorite: Product) => favorite.id === newFavorite.id)) {
    res
      .status(500)
      .json({ message: `Favorite with id ${req.body.id} already exists!` });
  } else if (newFavorite) {
    favorites.push(newFavorite);
    res.status(200).json(newFavorite);
  } else {
    res.status(500).json({ message: 'Error adding new favorite.' });
  }
};
