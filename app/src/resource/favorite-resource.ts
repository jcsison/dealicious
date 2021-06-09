import express, { Request, Response } from 'express';
import { createController } from 'awilix-express';

import { FavoriteService } from '../data/favorite/favorite-service';

interface ResourceDeps {
  favoriteService: FavoriteService;
}

const favoriteResourceDefinition = (deps: ResourceDeps) => ({
  getFavorites: async (req: Request, res: Response) => {
    const result = await deps.favoriteService.getFavorites(req.params.userId);

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: 'Favorites not found.' });
    }
  },
  addFavorite: async (req: Request, res: Response) => {
    await deps.favoriteService.addFavorite(req.body);

    res.status(200).send({});
  },
  removeFavorite: async (req: Request, res: Response) => {
    await deps.favoriteService.removeFavorite(req.params.favoriteId);

    res.status(200).send({});
  }
});

export const userResource = createController(favoriteResourceDefinition)
  .prefix('/api/favorite')
  .get('/:userId', 'getFavorites')
  .post('/', 'addFavorite', { before: express.json() })
  .delete('/remove/:favoriteId', 'removeFavorite');
