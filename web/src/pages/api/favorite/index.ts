import { NextApiRequest, NextApiResponse } from 'next';
import { Favorite, FavoritedProduct, UUID } from '../../../../shared/domain';

import db from '../db';
import { getDbItemById } from '../utils';

const addFavorite = (res: NextApiResponse, productId: UUID, userId: UUID) => {
  const product = getDbItemById('products', productId);
  if (
    db.favorites.find(
      (favorite: Favorite) =>
        favorite.productId === productId && favorite.userId === userId
    )
  ) {
    res.status(500).json({ message: `Product is already favorited!` });
  } else if (product && getDbItemById('users', userId)) {
    const newFavorite: Favorite = {
      id: `${(Number(db.favorites.slice(-1)[0]?.id) ?? 0) + 1}`,
      productId: productId,
      userId: userId
    };

    const newFavoritedProduct: FavoritedProduct = {
      ...newFavorite,
      ...product,
      id: newFavorite.id
    };

    db.favorites.push(newFavorite);
    res.status(200).json(newFavoritedProduct);
  }
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
    case 'POST':
      addFavorite(res, req.body.userId, req.body.productId);
      break;
    case 'DELETE':
      removeFavorite(res, req.body.favoriteId);
      break;
    default:
      res.status(500);
  }
};
