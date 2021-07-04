import * as uuid from 'uuid';
import { QueryTypes, Sequelize } from 'sequelize';
import {
  Favorite,
  FavoritedProduct,
  UUID
} from '../../../../web/src/shared/domain';
import { generateInsertExpression } from '../data-utils';
export interface FavoriteRepository {}

export interface FavoriteRepository {
  getFavorites(userId: UUID): Promise<FavoritedProduct[] | null>;
  addFavorite(favoriteToAdd: Favorite): Promise<void>;
  removeFavorite(productId: UUID, userId: UUID): Promise<void>;
}

interface FavoriteRepositoryDeps {
  sequelize: Sequelize;
  uuid: typeof uuid;
}

export const favoriteRepository = (
  deps: FavoriteRepositoryDeps
): FavoriteRepository => ({
  getFavorites: async (userId: UUID) => {
    const favorites: FavoritedProduct[] = await deps.sequelize.query(
      'SELECT *, favorites.id, favorites.created_at FROM favorites LEFT JOIN products ON favorites.productId = products.id WHERE favorites.userId = :userId',
      { replacements: { userId: userId }, type: QueryTypes.SELECT }
    );

    return favorites.length > 0 ? favorites : null;
  },

  addFavorite: async (favoriteToAdd: Favorite) => {
    const newFavorite: Omit<Favorite, 'created_at'> = {
      id: deps.uuid.v4(),
      productId: favoriteToAdd.productId,
      userId: favoriteToAdd.userId
    };

    const insertObj = { ...newFavorite };
    const insertExpression = generateInsertExpression(insertObj);

    await deps.sequelize.query(`INSERT INTO favorites ${insertExpression}`, {
      replacements: insertObj,
      type: QueryTypes.INSERT
    });
  },

  removeFavorite: async (productId: UUID, userId: UUID) => {
    await deps.sequelize.query(
      'DELETE FROM favorites WHERE productId=:productId AND userId=:userId',
      {
        replacements: { productId: productId, userId: userId },
        type: QueryTypes.DELETE
      }
    );
  }
});
