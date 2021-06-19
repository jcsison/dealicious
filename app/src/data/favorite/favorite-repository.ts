import * as uuid from 'uuid';
import { QueryTypes, Sequelize } from 'sequelize';
import { Favorite, UUID } from '../../../../web/src/shared/domain';
import { generateInsertExpression } from '../data-utils';
export interface FavoriteRepository {}

export interface FavoriteRepository {
  getFavorites(userId: UUID): Promise<Favorite[] | null>;
  addFavorite(favoriteToAdd: Favorite): Promise<void>;
  removeFavorite(favoriteToRemove: UUID): Promise<void>;
}

interface FavoriteRepositoryDeps {
  sequelize: Sequelize;
  uuid: typeof uuid;
}

export const favoriteRepository = (
  deps: FavoriteRepositoryDeps
): FavoriteRepository => ({
  getFavorites: async (userId: UUID) => {
    const favorites: Favorite[] = await deps.sequelize.query(
      'SELECT * FROM favorites WHERE userId=:userId',
      { replacements: { userId: userId }, type: QueryTypes.SELECT }
    );

    return favorites.length > 0 ? favorites : null;
  },

  addFavorite: async (favoriteToAdd: Favorite) => {
    const newFavorite: Favorite = {
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

  removeFavorite: async (favoriteToRemove: UUID) => {
    await deps.sequelize.query('DELETE FROM favorites WHERE id=:id', {
      replacements: { id: favoriteToRemove },
      type: QueryTypes.DELETE
    });
  }
});
