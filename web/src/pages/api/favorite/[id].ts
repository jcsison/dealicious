import { NextApiRequest, NextApiResponse } from 'next';
import {
  Favorite,
  FavoritedProduct,
  Product,
  UUID
} from '../../../../shared/domain';

import db from '../db';
import { getDbItemById } from '../utils';

const getFavorites = (res: NextApiResponse, userId: UUID) => {
  const favorites = db.favorites.filter(
    (favorite) => favorite.userId === userId
  );
  const favoritedProducts = favorites.map((favorite: Favorite) => {
    const product: Product = getDbItemById('products', favorite.productId);
    const favoritedProduct: FavoritedProduct = {
      ...product,
      id: favorite.id,
      productId: favorite.productId,
      userId: favorite.userId
    };

    return favoritedProduct;
  });

  res.status(200).json(favoritedProducts);
};

const removeFavorite = (res: NextApiResponse, favoriteId: UUID) => {
  const favorite: Favorite = getDbItemById('favorites', favoriteId);

  if (favorite) {
    db.favorites.filter((favorite) => favorite.id !== favoriteId);
    res.status(200);
  } else {
    res.status(404).json({ message: 'Favorited product not found!' });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      getFavorites(res, req.query.id as string);
      break;
    case 'DELETE':
      removeFavorite(res, req.query.id as string);
      break;
    default:
      res.status(500);
  }
};
