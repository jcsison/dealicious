import { Favorite, UUID } from '../../../../web/src/shared/domain';
import { FavoriteRepository } from './favorite-repository';

export interface FavoriteService {
  getFavorites(userId: UUID): Promise<Favorite[] | null>;
  addFavorite(favoriteToAdd: Favorite): Promise<void>;
  removeFavorite(favoriteToRemove: UUID): Promise<void>;
}

interface FavoriteServiceDeps {
  favoriteRepository: FavoriteRepository;
}

export const favoriteService = (
  deps: FavoriteServiceDeps
): FavoriteService => ({
  getFavorites: async (userId: UUID) => {
    return deps.favoriteRepository.getFavorites(userId);
  },
  addFavorite: async (favoriteToAdd: Favorite) => {
    await deps.favoriteRepository.addFavorite(favoriteToAdd);
  },
  removeFavorite: async (favoriteId: UUID) => {
    await deps.favoriteRepository.removeFavorite(favoriteId);
  }
});
